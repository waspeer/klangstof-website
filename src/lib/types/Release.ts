import { Music_allMarkdownRemark_edges_node_frontmatter_image as ReleaseImage } from './__generated__/Music';

interface ReleaseLink {
  platform: string;
  url: string;
}

export default interface Release {
  id: string;
  date: string;
  description: string;
  title: string;
  type: string;
  links: ReleaseLink[];
  image: ReleaseImage;
}
