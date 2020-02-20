module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? [
        ...members.reduce(
          (acc, value) =>
            acc +
            (typeof value == 'string'
              ? value.trim()[0].toUpperCase()
              : ''),
          ''
        )
      ]
        .sort()
        .join('')
    : false;
};
