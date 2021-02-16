/** Concatenate a list of strings with commas and an ampersand (or your own choices). */
export function commaAnd(strs, comma = ", ", and = " & ") {
  return strs.length <= 2
    ? strs.join(and)
    : strs[0] + comma + commaAnd(strs.slice(1), comma, and);
}

export function fullName({ firstname, lastname }) {
  return `${firstname} ${lastname}`;
}

export function lastnameFirst({ firstname, lastname }) {
  return `${lastname}, ${firstname}`;
}
