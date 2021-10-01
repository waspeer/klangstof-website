import S from '@sanity/desk-tool/structure-builder';

const structure = () => S.list()
  .title('Content')
  .items([
    S.documentListItem().id('general').schemaType('general').title('General Settings'),
    S.documentTypeListItem('release').title('Releases')
  ])

export default structure;
