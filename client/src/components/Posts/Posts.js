import Post from "./Post/Post"
import classes from "./Posts.module.css"

/**
 * DUMMY DATA
 */
import PostImage1 from "../../assets/Images/home-post-1.png"
import PostImage2 from "../../assets/Images/home-post-2.png"
import PostImage3 from "../../assets/Images/home-post-3.png"
import PostImage4 from "../../assets/Images/home-post-4.png"

import profile1 from "../../assets/Images/post-user-profile-1.png"
import profile2 from "../../assets/Images/post-user-profile-2.png"
import profile3 from "../../assets/Images/post-user-profile-3.png"
import profile4 from "../../assets/Images/post-user-profile-4.png"

const DUMMYPOSTS = [
  {
    user: {
      handle: "morganstanley__",
      profilePic: profile1,
    },
    post: {
      image: PostImage1,
      description: "newest paint in my nike af1s. say 😍 if you like it.",
    },
  },
  {
    user: {
      handle: "holden3d",
      profilePic: profile2,
    },
    post: {
      image: PostImage2,
      description: "Love all of these!! 😍😍",
    },
  },
  {
    user: {
      handle: "kaylagreen",
      profilePic: profile3,
    },
    post: {
      image: PostImage3,
      description: "gluten free and healthy🍏🍐. Let's go green",
    },
  },
  {
    user: {
      handle: "healthenthuz5",
      profilePic: profile4,
    },
    post: {
      image: PostImage4,
      description: "boxed water is the best.",
    },
  },
]

const Posts = () => {
  return (
    <div className={classes.posts}>
      {DUMMYPOSTS.map((post) => (
        <Post
          image={post.post.image}
          handle={post.user.handle}
          description={post.post.description}
          profilePic={post.user.profilePic}
        />
      ))}
    </div>
  )
}

export default Posts
