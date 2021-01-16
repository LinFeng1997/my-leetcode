/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    if (!intervals.length) return 0;

    const starts = intervals.map(item => item[0]);
    const ends = intervals.map(item => item[1]);

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let rooms = 0;
    let startPoint = 0;
    let endPoint = 0;

    while (startPoint < intervals.length) {
        let start = starts[startPoint];
        let end = ends[endPoint];

        if (start >= end) { // 释放一个会议室
            rooms--;
            endPoint++;
        }

        startPoint++;
        rooms++;
    }

    return rooms;
};

module.exports = minMeetingRooms;