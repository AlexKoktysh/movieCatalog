type IConfigKeyType = "site_name" | "first_name" | "last_name";

export type IConfigState = {
    [key in IConfigKeyType]: string;
};
