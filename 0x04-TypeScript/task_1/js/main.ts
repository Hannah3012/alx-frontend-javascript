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

// interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// function implementation using the interface
const printTeacher: printTeacherFunction = (firstName , lastName ) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// class implementation
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}




