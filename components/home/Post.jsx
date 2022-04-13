import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React from "react";
import { USERS } from "../../data/users";
import { LinearGradient } from "expo-linear-gradient";

const Post = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{USERS.map((story, index) => (
				<View style={styles.postContainer} key={index}>
					<View style={styles.postHeader}>
						<View style={styles.postAvatarName}>
							<TouchableOpacity>
								<View style={styles.storyBox}>
									<LinearGradient
										colors={["#f6ba00", "#ea0c5f"]}
										start={{ x: 0, y: 1 }}
										end={{ x: 1, y: 0 }}
										style={styles.bgGradient}
									>
										<Image source={{ uri: story.image }} style={styles.story} />
									</LinearGradient>
								</View>
							</TouchableOpacity>
							<TouchableOpacity>
								<Text style={styles.userName}>{story.user}</Text>
							</TouchableOpacity>
						</View>
						<TouchableOpacity>
							<Image
								style={styles.icons}
								source={require("../../assets/Menu.png")}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.postPhotoContainer}>
						<Image style={styles.postPhoto} source={{ uri: story.photo }} />
					</View>
					<View style={styles.postInteractions}>
						<View style={styles.leftIcons}>
							<TouchableOpacity>
								<Image
									style={styles.interactionIcons}
									source={require("../../assets/like.png")}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									style={styles.interactionIcons}
									source={require("../../assets/comment.png")}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									style={styles.interactionIcons}
									source={require("../../assets/Send.png")}
								/>
							</TouchableOpacity>
						</View>
						<View style={styles.rightIcons}>
							<TouchableOpacity>
								<Image
									style={styles.interactionIcons}
									source={require("../../assets/Bookmark-outlined.png")}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.postComments}>
						<Text style={styles.userNameComments}>{story.likes} likes</Text>
						<View style={styles.innerPostComments}>
							<Text style={styles.userNameComments}>
								{story.user}
								{"  "}
								<Text style={styles.bodyTextComment}>{story.userComment}</Text>
							</Text>
						</View>
						<Text style={styles.smallBodyText}>{story.hoursAgo} hours ago</Text>
					</View>
				</View>
			))}
		</ScrollView>
	);
};

export default Post;

const styles = StyleSheet.create({
	postComments: {
		marginLeft: 12,
		marginRight: 4,
	},
	innerPostComments: {
		flexDirection: "row",
		marginVertical: 8,
	},
	bodyText: {
		color: "#fff",
		fontWeight: "400",
	},
	bodyTextComment: {
		color: "#fff",
		fontWeight: "400",
	},
	smallBodyText: {
		color: "#ffffff99",
		fontWeight: "400",
		fontSize: 14,
		marginTop: 4,
	},
	postInteractions: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 8,
		marginBottom: 12,
		marginHorizontal: 8,
	},
	interactionIcons: {
		width: 24,
		height: 24,
		marginHorizontal: 8,
	},
	leftIcons: {
		flexDirection: "row",
	},
	icons: {
		width: 24,
		height: 24,
	},
	postPhotoContainer: {
		width: "100%",
		height: 500,
		marginVertical: 8,
	},
	postPhoto: {
		width: "100%",
		height: 500,
	},
	userName: {
		fontWeight: "700",
		fontSize: 16,
		color: "#fff",
		marginLeft: 12,
	},
	userNameComments: {
		fontWeight: "700",
		fontSize: 16,
		color: "#fff",
	},
	postContainer: {
		width: "100%",
		marginHorizontal: 0,
		marginBottom: 32,
	},
	postAvatarName: {
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
	},
	postHeader: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 8,
	},
	storyBox: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	bgGradient: {
		borderRadius: 23,
		padding: 2,
		margin: 2,
	},
	bodyText: {
		color: "#fff",
		textAlign: "center",
		width: "100%",
	},
	story: {
		height: 40,
		width: 40,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: "#000",
	},
});
