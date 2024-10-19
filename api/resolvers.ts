const dinosaurs = [
  {
    name: "Aardonyx",
    description: "An early stage in the evolution of sauropods.",
  },
  {
    name: "Abelisaurus",
    description: '"Abel\'s lizard" has been reconstructed from a single skull.',
  },
];

interface ArgsType {
  name: string;
  description: string;
}


export const resolvers = {
  Query: {
    dinosaurs: () => dinosaurs,
    dinosaur: (_: ArgsType, args: ArgsType) => {
      return dinosaurs.find((dinosaur) => dinosaur.name === args.name);
    },
  },
};