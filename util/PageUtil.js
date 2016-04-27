function getPageBegin(pageNum, pageSize) {
    if (pageNum != null && pageSize != null) {
        pageNum = parseInt(pageNum,10);
        pageSize = parseInt(pageSize,10);
        return pageNum == null || pageNum <= 1 ? 0 : ((pageNum - 1) * pageSize);
    }
    return 0;
}

function getTotalPage(totalCount, pageSize) {
    if (totalCount != null) {
        totalCount = parseInt(totalCount,10);
        pageSize = parseFloat(pageSize);
        return Math.ceil(totalCount / pageSize);
    }
    return 0;
}

exports.getPageBegin = getPageBegin;
exports.getTotalPage = getTotalPage;
