import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import { USERS } from "../../data/users";
import PostHeader from "./PostHeader";
import PostPhoto from "./PostPhoto";
import PostInteractions from "./PostInteractions";
import PostCaption from "./PostCaption";
import PostComments from "./PostComments";

const Post = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{USERS.map((story, index) => (
				<View style={styles.postContainer} key={index}>
					<PostHeader imgSource={{ uri: story.image }} user={story.user} />
					<PostPhoto imgSource={{ uri: story.photo }} />
					<PostInteractions
						like={require("../../assets/like.png")}
						comment={require("../../assets/comment.png")}
						share={require("../../assets/Send.png")}
						bookmark={require("../../assets/Bookmark-outlined.png")}
					/>
					<PostCaption
						user={story.user}
						likes={`${story.likes.toLocaleString("en")} likes`}
						caption={story.caption}
					/>
					<PostComments comments={Math.trunc(story.likes / 4)} />
					{/* //TODO: Find out how to display dynamic content from external file
					//?: Build the comments screen to display all comments in it. 
					//!: Remove hard coded Elon Musk comment. 
					*/}
					{/* {comments.map((follower, comments, comment) => (
						<PostComments
						follower={comments.follower}
						comment={comments.comment}
						/>
					))} */}
					<Text style={styles.smallBodyText}>{story.hoursAgo} hours ago</Text>
				</View>
			))}
		</ScrollView>
	);
};

export default Post;

const styles = StyleSheet.create({
	postContainer: {
		width: "100%",
		marginHorizontal: 0,
		marginBottom: 32,
	},
	bodyTextComment: {
		color: "#fff",
		fontWeight: "400",
	},
});
