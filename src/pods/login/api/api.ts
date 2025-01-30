export const login = (
  username: string,
  password: string
): Promise<{ username: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        username === "" && password === ""
          ? { username: "admin" }
          : null
      );
    }, 500);
  });
};
