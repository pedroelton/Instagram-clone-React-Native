import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/home/Header";
import React from "react";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import TabBar from "../components/home/TabBar";

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Header stickyHeaderIndices={[0]} />
			<ScrollView showVerticalScrollIndicator={false} vertical>
				<Stories />
				<Post />
			</ScrollView>
			<TabBar />
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#000",
		flex: 1,
	},
});
