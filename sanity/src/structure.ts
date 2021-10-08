import S from '@sanity/desk-tool/structure-builder';
import { BiDisc, BiDockTop, BiWrench } from 'react-icons/bi';

const structure = () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .id('general')
        .schemaType('general')
        .title('General Settings')
        .icon(BiWrench),
      S.documentListItem().id('home').schemaType('page').title('Landing Page'),
      S.documentTypeListItem('release').title('Releases').icon(BiDisc),
    ]);

export default structure;
