import type { BaseTranslation } from "../i18n-types";

const report: BaseTranslation = {
    block: {
        title: "Block",
        content: "Block any communication from and to {userName}. This can be reverted.",
        unblock: "Unblock this user",
        block: "Block this user",
    },
    ban: {
        title: "Banish",
        content: "Ban user {userName} from the running world. This can be cancelled from the administration.",
        ban: "Ban this user",
    },
    title: "Report",
    content: "Send a report message to the administrators of this room. They may later ban this user.",
    message: {
        title: "Your message: ",
        empty: "Report message cannot to be empty.",
    },
    submit: "Report this user",
    moderate: {
        title: "Moderate {userName}",
        block: "Block",
        report: "Report",
        noSelect: "ERROR : There is no action selected.",
        ban: "Banish"
    },
};

export default report;
