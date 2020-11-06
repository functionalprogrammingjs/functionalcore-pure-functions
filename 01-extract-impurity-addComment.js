
const addComment = (userId, comment) => {
    const record = {
        id:uniqueId(),
        userId,
        text: comment,
    };
    const el = buildCommentEl(record);
    commentList.appednChild(el) ;
}

addComment(42, "this is my first comment!");

// 3 problemas
// [1] uniqueId()
// [appendChild]
// no estamos retornando nada esto es un procedimiento más que una función funcional

// --------- SOLUCIÓN --------------------------------------------------------------
const newComment = (userId, commentId, comment) => {
    const record = {
        id: commentId,
        userId,
        text: comment,
    };
    return record;
}

const commentId = uniqueId();
const record = newComment(42,commentId,'this is my first comment!');
const el = buildCommentEl(record);
commentList.appednChild(el);

