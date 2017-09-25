const TitleRow = 1
const MessageRow = 2
const MainRow = 3
const ControlRow = 4
const InventoryRow = 5

const FirstColumn = 1
const LastColumn = 10

const HUDBlockPadding = "10px"
const HUDBorder = "1px solid black"

const ButtonNormalBackground = "lightgray"
const ButtonHoverBackground = "darkgray"
const ButtonClickBackground = "gray"

const WallLine = "1px solid black"
const WallBoxWidth = 14
const WallBoxHeight = 19
const WallBoxWidthPadding = "5px"
const WallBoxHeightPadding = "12px"

const WallBoxWidthCentered = "7px"
const WallBoxHeightCentered = "10px"

const px = "px"

const styles = {
    // Grid
    Game: {
        display: "grid",
        gridTemplateColumns:
            // column1-4
            "repeat(4, 95px) " +
            // column5
            "130px " + 
            // column6-10
            "repeat(5, 76.8px)"

        ,
        gridTemplateRows:
            // row1
            "auto " +
            // row 1
            "25px " +
            // row 2
            "235px " +
            // row 3
            "auto " +
            // row 4
            "auto "
        ,
        gridGap: "10px",
        userSelect: "none",
        cursor: "pointer",
    },
    // page title
    Header: {
        gridColumnStart: FirstColumn,
        gridColumnEnd: LastColumn,
        gridRowStart: TitleRow,
        textAlign: "center",
    },
    H1: {
        margin: "0px",
        fontStyle: "italic",

    },
    H2: {
        margin: "0px",
    },
    // links
    Link: {
        color: "inherit",
    },
    LinkHover: {
        color: "inherit",
        textDecoration: "none",
    },
    // Contact info
    Contact: {
        gridColumnStart: "7",
        gridColumnEnd: LastColumn,
        gridRowStart: MessageRow,
        textAlign: "right",
    },
    GitHubLogo: {
        height: "30px",
        verticalAlign: "middle",
        marginLeft: "2px",
    },
    // Top-screen Message
    Message: {
        gridColumnStart: FirstColumn,
        gridColumnEnd: "7",
        gridRowStart: MessageRow,
        minHeight: "25px",
        fontWeight: "bold",
    },
    // Story
    StoryBlock: {
        gridColumnStart: FirstColumn,
        gridColumnEnd: "6",
        gridRowStart: MainRow,
        userSelect: "text",
        border: HUDBorder,
        padding: HUDBlockPadding,
    },
    Story: {
        userSelect: "text",
        minHeight: "25px",
    },

    Event: {
        userSelect: "text",
        minHeight: "25px",
    },
    // Map
    Map: {
        gridColumnStart: "6",
        gridColumnEnd: LastColumn,
        gridRowStart: MainRow,
        border: HUDBorder,
        overflow: "hidden",
        padding: HUDBlockPadding,
        // otherwise, the map will be distorted
        minWidth: "300px",
    },
    MapObject: {
        display: "inline-block",
        width: "15px",
        height: "15px",
    },
    Wall: {
        Pillar: {
            border: WallLine,
            margin: "5px 5px 5px 0px",
            width: (WallBoxWidth - 6) + px,
            height: (WallBoxHeight - 10) + px,
            background: "black",
        },
        NorthToSouth: {
            borderLeft: WallLine,
            marginLeft: WallBoxWidthPadding,
            width: WallBoxWidthCentered,
            height: WallBoxHeight + px,
        },
        WestToEast: {
            borderBottom: WallLine,
            marginBottom: WallBoxHeightPadding,
            width: WallBoxWidth + px,
            height: WallBoxHeightCentered,
        },
        NorthToEast: {
            borderLeft: WallLine,
            borderBottom: WallLine,
            marginLeft: "5px",
            width: "9px",
            height: WallBoxHeightCentered,
        },
        NorthToWest: {
            borderRight: WallLine,
            borderBottom: WallLine,
            marginLeft: "-1px",
            width: "4px",
            height: WallBoxHeightCentered,
        },
        SouthToEast: {
            borderLeft: WallLine,
            borderTop: WallLine,
            marginLeft: "5px",
            marginTop: "10px",
            width: "9px",
            height: WallBoxHeightCentered,
        },
        SouthToWest: {
            borderRight: WallLine,
            borderTop: WallLine,
            marginTop: "10px",
            width: "5px",
            height: WallBoxHeightCentered,
        },
    },
    // Various Player Controls
    ControlBlock: {
        gridColumnStart: FirstColumn,
        gridColumnEnd: LastColumn,
        gridRowStart: ControlRow,
        border: HUDBorder,
    },
    // Player Stats
    PlayerStats1: {
        gridColumnStart: FirstColumn,
        gridColumnEnd: "2",
        gridRowStart: ControlRow,
        padding: HUDBlockPadding,
    },
    PlayerStats2: {
        gridColumnStart: "5",
        gridColumnEnd: "6",
        gridRowStart: ControlRow,
        padding: HUDBlockPadding,
    },
    PlayerStat: {
        paddingBottom: "5px",
    },
    // Directional Arrows
    ArrowContainer: {
        gridColumnStart: "2",
        gridColumnEnd: "3",
        gridRowStart: ControlRow,
        textAlign: "center",
        padding: HUDBlockPadding,
        margin: "auto",
    },
    ArrowRow: {
        width: "72px",
    },
    ArrowBlock: {
        display: "inline-block",
        width: "32px",
        height: "23px",
        textAlign: "center",
        border: "1px solid black",
        paddingTop: "3px",
        margin: "1px",
        background: ButtonNormalBackground,
    },
    ArrowBlockHover: {
        display: "inline-block",
        width: "32px",
        height: "23px",
        textAlign: "center",
        border: "1px solid black",
        paddingTop: "3px",
        margin: "1px",
        background: ButtonHoverBackground,
    },
    ArrowBlockClick: {
        display: "inline-block",
        width: "32px",
        height: "23px",
        textAlign: "center",
        border: "1px solid black",
        paddingTop: "3px",
        margin: "1px",
        background: ButtonClickBackground,
    },
    // Actions
    Actions: {
        gridColumnStart: "3",
        gridColumnEnd: "5",
        gridRowStart: ControlRow,
        padding: HUDBlockPadding,
    },
    ActionButton: {
        display: "inline-block",
        textAlign: "center",
        border: "1px solid black",
        padding: "3px",
        margin: "1px",
        userSelect: "none",
        background: ButtonNormalBackground,
    },
    ActionButtonHover: {
        display: "inline-block",
        textAlign: "center",
        border: "1px solid black",
        padding: "3px",
        margin: "1px",
        userSelect: "none",
        background: ButtonHoverBackground,
    },
    ActionButtonClick: {
        display: "inline-block",
        textAlign: "center",
        border: "1px solid black",
        padding: "3px",
        margin: "1px",
        userSelect: "none",
        background: ButtonClickBackground,
    },
    // Inventory
    Inventory: {
        gridColumnStart: FirstColumn,
        gridColumnEnd: LastColumn,
        gridRowStart: InventoryRow,
        border: HUDBorder,
    },
    // Item Image
    ItemImageBlock: {
        height: "32px",
        width: "32px",
        border: "1px solid gray",
        margin: "1px",
        textAlign: "center",
        float: "left",
    },
    ItemImage: {
        maxHeight: "30px",
        maxWidth: "30px",
        padding: "1px",
        // placeholder style when asset is missing
        overflow: "hidden",
        fontSize: "10px",
    },
}

export default styles