import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
};

async function logThreePosts() {
  const data = await fetchPosts();
  data
    .slice(0, 3)
    .forEach((post) => console.log({ title: post.title, body: post.body }));
}

logThreePosts();
