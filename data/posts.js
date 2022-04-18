import { USERS } from "./users";

export const POSTS = [
	{
		user: USERS[0].user,
		profilePicture: USERS[0].image,
		photo:
			"https://images.unsplash.com/photo-1649779046710-3cdc9e598f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		caption:
			"I like this photo, that's why I added it to my Instagram fake post. ",
		likes: 974,
		comments: [
			{
				follower: "elon.musk",
				comment: "Hey Pedro, good job with this app!",
			},
			{
				follower: "jeffbezos",
				comment:
					"Yeah, it's quite accurate. @elon.musk, I just bought some #DogeCoinToTheMoon",
			},
			{
				follower: "noah.sakoda.oliveira",
				comment: "Good job daddy! ˆ_ˆ lov u",
			},
		],
	},
	{
		user: USERS[0].user,
		profilePicture: USERS[0].image,
		photo:
			"https://images.unsplash.com/photo-1649779046710-3cdc9e598f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		caption:
			"I like this photo, that's why I added it to my Instagram fake post. ",
		likes: 115,
		hoursAgo: "3",
		comments: [
			{
				follower: "zuck",
				comment:
					"lizzy, tell @pedroelton, I'm blocking his instagram if he make another clone!",
			},
			{
				follower: "elon.musk",
				comment: "@zuck, you're so annoying...",
			},
		],
	},
];
