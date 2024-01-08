// https://github.com/wesbos/wesbos/blob/master/functions/instagram.js

interface Post {
  type: string;
  biggie: string;
  thumbnail: string;
  url: string;
  caption: string;
  id: string;
}

const url = `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"1639589052","first":6}`;

const cache = {
  lastFetch: 0,
  posts: [] as Post[],
};

function slimUpPosts(response: any): Post[] {
  return response.data.user.edge_owner_to_timeline_media.edges.map((edge: any) => ({
    type: edge.node.__typename,
    biggie: edge.node.thumbnail_src,
    thumbnail: edge.node.thumbnail_resources[2].src,
    url: `https://instagram.com/p/${edge.node.shortcode}`,
    caption:
      edge.node.edge_media_to_caption.edges.length > 0
        ? edge.node.edge_media_to_caption.edges[0].node.text
        : null,
    id: edge.node.id,
  }));
}

export async function getPosts() {
  // first see if we have a cache in 30 mins
  const timeSinceLastFetch = Date.now() - cache.lastFetch;

  if (timeSinceLastFetch <= 1800000) {
    return cache.posts;
  }

  const data = await fetch(url).then((res) => res.json());
  const posts = slimUpPosts(data);

  cache.lastFetch = Date.now();
  cache.posts = posts;

  return posts;
}
