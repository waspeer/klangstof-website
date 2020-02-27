import { Factory } from 'fishery';

import { Music_allMusicYaml_edges as MusicYaml } from '#lib/types/__generated__/Music';

export default Factory.define<MusicYaml>(({ sequence }) => ({
  __typename: 'MusicYamlEdge',
  node: {
    __typename: 'MusicYaml',
    id: String(sequence),
    image: `/assets/image${sequence}.jpg`,
    date: `201${sequence}-01-31T23:00:00.000Z`,
    description: `this is wonderful stuff ${sequence}`,
    title: `Item ${sequence}`,
    type: 'album',
    links: [
      {
        __typename: 'MusicYamlLinks',
        platform: 'spotify',
        url: 'https://open.spotify.com/album/4wQ77yncZa8M8VYn39jjq3',
      },
      {
        __typename: 'MusicYamlLinks',
        platform: 'appleMusic',
        url: 'https://music.apple.com/nl/album/everest-ep/1468217239',
      },
      {
        __typename: 'MusicYamlLinks',
        platform: 'deezer',
        url: 'https://www.deezer.com/en/album/100113712',
      },
      {
        __typename: 'MusicYamlLinks',
        platform: 'itunes',
        url: 'https://music.apple.com/nl/album/everest-ep/1468217239',
      },
      {
        __typename: 'MusicYamlLinks',
        platform: 'googlePlay',
        url:
          'https://play.google.com/store/music/album/Klangstof_Everest?id=Bqqloddqqmw5main2ugktyn5j54&hl=en_US',
      },
    ],
  },
}));
