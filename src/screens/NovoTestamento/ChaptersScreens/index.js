"use strict";
exports.__esModule = true;
exports.ChaptersScreens = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var chapter_1 = require("../../../components/chapter");
var NtBibleContext_1 = require("../../../hooks/NtBibleContext");
var bottomLabelBibleVersion_1 = require("../../../components/bottomLabelBibleVersion");
var BibleVersionContext_1 = require("../../../hooks/BibleVersionContext");
function ChaptersScreens() {
    var book = (0, NtBibleContext_1.useBook)().book;
    var versionSelected = (0, BibleVersionContext_1.useBibleVersion)().versionSelected;
    console.log("Tela dos capítulos");
    return (<styles_1.Container>
            <react_native_1.FlatList style={styles.FlatList} data={book.chapters} initialNumToRender={10} numColumns={4} columnWrapperStyle={{ justifyContent: "center", alignItems: "center" }} renderItem={function (_a) {
            var item = _a.item, index = _a.index;
            return (<chapter_1.Chapter index={index + 1} key={index}/>);
        }}/>

            <bottomLabelBibleVersion_1.BotomLabelBibleVersion bibleVersion={versionSelected.label}/>
        </styles_1.Container>);
}
exports.ChaptersScreens = ChaptersScreens;
var styles = react_native_1.StyleSheet.create({
    FlatList: {
        width: '100%',
        backgroundColor: '#fff'
    }
});
