import bcrypt from "bcrypt";

export async function genPassword(password) {
  const noOfRounds = 10;
  const salt = await bcrypt.genSalt(noOfRounds);
  // console.log(salt)
  const hashedPassword = await bcrypt.hash(password, salt);
  // console.log(finalPassword)
  return hashedPassword;
}
