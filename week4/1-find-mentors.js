import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  return mentors
  .filter(mentor => mentor.canTeach.includes(moduleName))
  .map(mentor => mentor.name) 
};

console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *ø
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  const avaibleMentors = mentors.filter(mentor => mentor.canTeach.includes(moduleName));
  let mentorIndex;
  if (avaibleMentors.length>0)
    mentorIndex = Math.floor(Math.random()*avaibleMentors.length);
    return mentors[mentorIndex].name;
};

console.log(findMentorForModule('javascript'));
