interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional attributes without specifying the name of the attribute
}

// Extended Teacher with Directors interface

interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director: Directors = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Chicago",
  numberOfReports: 5,
  contract: false, // extra attribute still allowed
};

console.log(director);