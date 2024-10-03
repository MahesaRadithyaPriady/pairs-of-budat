gdjs.dialogCode = {};
gdjs.dialogCode.localVariables = [];
gdjs.dialogCode.GDBackgroundObjects1= [];
gdjs.dialogCode.GDBackgroundObjects2= [];
gdjs.dialogCode.GDBackgroundObjects3= [];
gdjs.dialogCode.GDcarackterCwoObjects1= [];
gdjs.dialogCode.GDcarackterCwoObjects2= [];
gdjs.dialogCode.GDcarackterCwoObjects3= [];
gdjs.dialogCode.GDchartarakterCewekObjects1= [];
gdjs.dialogCode.GDchartarakterCewekObjects2= [];
gdjs.dialogCode.GDchartarakterCewekObjects3= [];
gdjs.dialogCode.GDdialogObjects1= [];
gdjs.dialogCode.GDdialogObjects2= [];
gdjs.dialogCode.GDdialogObjects3= [];
gdjs.dialogCode.GDBluePanelObjects1= [];
gdjs.dialogCode.GDBluePanelObjects2= [];
gdjs.dialogCode.GDBluePanelObjects3= [];
gdjs.dialogCode.GDNamaKarakterObjects1= [];
gdjs.dialogCode.GDNamaKarakterObjects2= [];
gdjs.dialogCode.GDNamaKarakterObjects3= [];
gdjs.dialogCode.GDBtnNextObjects1= [];
gdjs.dialogCode.GDBtnNextObjects2= [];
gdjs.dialogCode.GDBtnNextObjects3= [];


gdjs.dialogCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "waktu") >= 0.05;
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waktu");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


};gdjs.dialogCode.mapOfGDgdjs_9546dialogCode_9546GDBtnNextObjects1Objects = Hashtable.newFrom({"BtnNext": gdjs.dialogCode.GDBtnNextObjects1});
gdjs.dialogCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "Percakapan");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waktu");
}{gdjs.dialogueTree.startFrom("Start");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialog"), gdjs.dialogCode.GDdialogObjects1);
{for(var i = 0, len = gdjs.dialogCode.GDdialogObjects1.length ;i < len;++i) {
    gdjs.dialogCode.GDdialogObjects1[i].setBBText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.dialogCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Masamune");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NamaKarakter"), gdjs.dialogCode.GDNamaKarakterObjects1);
{for(var i = 0, len = gdjs.dialogCode.GDNamaKarakterObjects1.length ;i < len;++i) {
    gdjs.dialogCode.GDNamaKarakterObjects1[i].setBBText("Masamune");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Aki");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NamaKarakter"), gdjs.dialogCode.GDNamaKarakterObjects1);
{for(var i = 0, len = gdjs.dialogCode.GDNamaKarakterObjects1.length ;i < len;++i) {
    gdjs.dialogCode.GDNamaKarakterObjects1[i].setBBText("Aki");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isCommandCalled("Stop");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnNext"), gdjs.dialogCode.GDBtnNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NamaKarakter"), gdjs.dialogCode.GDNamaKarakterObjects1);
{for(var i = 0, len = gdjs.dialogCode.GDNamaKarakterObjects1.length ;i < len;++i) {
    gdjs.dialogCode.GDNamaKarakterObjects1[i].setBBText("");
}
}{for(var i = 0, len = gdjs.dialogCode.GDBtnNextObjects1.length ;i < len;++i) {
    gdjs.dialogCode.GDBtnNextObjects1[i].getBehavior("Tween").addObjectPositionYTween2("BtnNext", 500, "easeOutQuad", 2, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnNext"), gdjs.dialogCode.GDBtnNextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.dialogCode.mapOfGDgdjs_9546dialogCode_9546GDBtnNextObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.dialogCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.dialogCode.GDBackgroundObjects1.length = 0;
gdjs.dialogCode.GDBackgroundObjects2.length = 0;
gdjs.dialogCode.GDBackgroundObjects3.length = 0;
gdjs.dialogCode.GDcarackterCwoObjects1.length = 0;
gdjs.dialogCode.GDcarackterCwoObjects2.length = 0;
gdjs.dialogCode.GDcarackterCwoObjects3.length = 0;
gdjs.dialogCode.GDchartarakterCewekObjects1.length = 0;
gdjs.dialogCode.GDchartarakterCewekObjects2.length = 0;
gdjs.dialogCode.GDchartarakterCewekObjects3.length = 0;
gdjs.dialogCode.GDdialogObjects1.length = 0;
gdjs.dialogCode.GDdialogObjects2.length = 0;
gdjs.dialogCode.GDdialogObjects3.length = 0;
gdjs.dialogCode.GDBluePanelObjects1.length = 0;
gdjs.dialogCode.GDBluePanelObjects2.length = 0;
gdjs.dialogCode.GDBluePanelObjects3.length = 0;
gdjs.dialogCode.GDNamaKarakterObjects1.length = 0;
gdjs.dialogCode.GDNamaKarakterObjects2.length = 0;
gdjs.dialogCode.GDNamaKarakterObjects3.length = 0;
gdjs.dialogCode.GDBtnNextObjects1.length = 0;
gdjs.dialogCode.GDBtnNextObjects2.length = 0;
gdjs.dialogCode.GDBtnNextObjects3.length = 0;

gdjs.dialogCode.eventsList1(runtimeScene);
gdjs.dialogCode.GDBackgroundObjects1.length = 0;
gdjs.dialogCode.GDBackgroundObjects2.length = 0;
gdjs.dialogCode.GDBackgroundObjects3.length = 0;
gdjs.dialogCode.GDcarackterCwoObjects1.length = 0;
gdjs.dialogCode.GDcarackterCwoObjects2.length = 0;
gdjs.dialogCode.GDcarackterCwoObjects3.length = 0;
gdjs.dialogCode.GDchartarakterCewekObjects1.length = 0;
gdjs.dialogCode.GDchartarakterCewekObjects2.length = 0;
gdjs.dialogCode.GDchartarakterCewekObjects3.length = 0;
gdjs.dialogCode.GDdialogObjects1.length = 0;
gdjs.dialogCode.GDdialogObjects2.length = 0;
gdjs.dialogCode.GDdialogObjects3.length = 0;
gdjs.dialogCode.GDBluePanelObjects1.length = 0;
gdjs.dialogCode.GDBluePanelObjects2.length = 0;
gdjs.dialogCode.GDBluePanelObjects3.length = 0;
gdjs.dialogCode.GDNamaKarakterObjects1.length = 0;
gdjs.dialogCode.GDNamaKarakterObjects2.length = 0;
gdjs.dialogCode.GDNamaKarakterObjects3.length = 0;
gdjs.dialogCode.GDBtnNextObjects1.length = 0;
gdjs.dialogCode.GDBtnNextObjects2.length = 0;
gdjs.dialogCode.GDBtnNextObjects3.length = 0;


return;

}

gdjs['dialogCode'] = gdjs.dialogCode;
