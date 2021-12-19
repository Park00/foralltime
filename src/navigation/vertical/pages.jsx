import {
    Bookmark, Category, Chat,
    CloseSquare, Heart2,
    PaperPlus, Search, Star, User,
} from "react-iconly";

const pages = [
    {
        header: "Library",
    },
    {
        id: "knowledge-base-1",
        title: "Soul",
        icon: <User set="bulk" className="remix-icon" />,
        navLink: "/pages/knowledge-base/knowledge-base-1",
    },
    {
        id: "knowledge-base-2",
        title: "Scroll",
        icon: <Heart2 set="bulk" className="remix-icon" />,
        navLink: "/pages/knowledge-base/knowledge-base-2",
    },
    {
        id: "knowledge-base-2",
        title: "Items",
        icon: <Category set="bulk" primaryColor="remix-icon"/>,
        navLink: "/pages/knowledge-base/knowledge-base-2",
    },
    {
        id: "knowledge-base-2",
        title: "Story",
        icon: <Chat set="bulk" primaryColor="remix-icon"/>,
        navLink: "/pages/knowledge-base/knowledge-base-2",
    },
    {
        id: "knowledge-base-2",
        title: "Guide",
        icon: <Search set="bulk" primaryColor="remix-icon"/>,
        navLink: "/pages/knowledge-base/knowledge-base-2",
    },
    {
        id: "knowledge-base-2",
        title: "Notice",
        icon: <Star set="bold" primaryColor="remix-icon"/>,
        navLink: "/pages/knowledge-base/knowledge-base-2",
    },

];

export default pages
