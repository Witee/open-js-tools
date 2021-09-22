type DataSource = (string | number | undefined | null)[][];
interface Filters {
  [index: string]: string[];
}
interface Sorter {
  field: string;
  order: 'descend' | 'ascend' | undefined;
}

type CategoryColumn = string;
type ValueColumn = string;
type LegendColumn = string;

interface Dataset {
  source: (string | number)[][];
}

type Header = (string | number)[];
