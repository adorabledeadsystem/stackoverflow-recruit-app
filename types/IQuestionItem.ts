export interface IQuestionItem {
    question_id: number;
    title: string;
    owner: {
        display_name: string;
    };
    tags: string[];
    answer_count: number;
}