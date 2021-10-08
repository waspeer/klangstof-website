// SLICES
// ------

enum SliceType {
  HEADER = 'HEADER',
  RELEASES = 'RELEASES',
  SHOWS = 'SHOWS',
}

interface BaseSlice {
  type: SliceType;
}

type Slice = BaseSlice;

// OTHER
// -----

interface Page {
  slices: Slice[];
}

interface Release {
  name: string;
}

export { SliceType, Slice, Page, Release };
