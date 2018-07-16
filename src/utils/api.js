import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from './_Data.js';

export const getInitialData = () => {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }));
};

export const saveQuestion = (info) => {
    return _saveQuestion(info);
};

export const saveQuestionAnswer = (info) => {
    return _saveQuestionAnswer(info)
};
