/**
 * Created by rharik on 5/11/16.
 */

import headerMenu from './headerMenuActions'
import expandChapter from './chapterActions'

export default {
    onCourseMenuHover: headerMenu.onCourseMenuHover,
    onHelpMenuHover: headerMenu.onHelpMenuHover,
    expandChapter: expandChapter.expandChapter
};

