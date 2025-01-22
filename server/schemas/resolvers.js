const { User, Book } = require('../models');
const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw AuthenticationError;
        },
    },

    Mutation: {
        // Log In for users
        loginUser: async (_parent, args, context) => {
            const user = await User.findOne({
                $or: [{ username: args.username }, { email: args.email }],
            });
            if(!user) {
                throw AuthenticationError;
            }
            const correctPass = await user.isCorrectPassword(args.password);
            if (!correctPass) {
                throw AuthenticationError;
            }
            const token = signToken(user);
            return { token, user };
        },

        // Creates user and logs in after
        userAdd: async (parent, args, context) => {
            // console.log(userAdd);
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        // Save book(s)
        saveBook: async (parent, args, context) => {
            if (context.user) {
                const userUpdate = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: args.bookInput } },
                    { new: true, runValidators: true }
                );
                return userUpdate;
            }
            throw AuthenticationError;
        },

        // Remove book(s)
        removeBook: async (parent, args, context) => {
            if (context.user) {
                const userUpdate = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: args.id } },
                    { new: true, runValidators: true }
                );
                return userUpdate;
            }
            throw AuthenticationError;
        },
    },
};

module.exports = resolvers;
