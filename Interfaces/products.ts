export interface IProduct {
    id:             string;
    name:           string;
    images:         string[];
    description:    string;
    price:          string;
    highlights:     string[];
    tags:           string[];
    Specification:  Specification;
    Accesories:     string[];
    ProductFeature: string[];
    status:         string;
}

enum status {
    "OutOfStock" , "Svailable"
  }

export interface Specification {
    BaseMaterial: string;
    Thickness:    string;
    Length:       string;
    Height:       string;
    Width:        string;
}
