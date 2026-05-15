//import { javascriptGenerator } from "./packages/blockly/javascript.js"
$(function(){
    // Create toolbox
    var toolbox = {
        "kind": "categoryToolbox",
        "contents": [
            {
                "kind": "category",
                "name": "Control",
                "contents": [
                    {
                        "kind": "block",
                        "type": "controls_if"
                    },
                ]
            },
            {
                "kind": "category",
                "name": "Logic",
                "contents": [
                    {
                        "kind": "block",
                        "type": "logic_compare"
                    },
                    {
                        "kind": "block",
                        "type": "logic_operation"
                    },
                    {
                        "kind": "block",
                        "type": "logic_boolean"
                    }
                ]
            }
        ]
    };
    // Inject Blockly into the Blockly div
    const workspace = Blockly.inject('blocklyDiv',{
        oneBasedIndex:true,
        toolbox:toolbox
    })
    $('#generateCode').on('click',function(){
        $('#generatedCode').val(javascriptGenerator.workspaceToCode(workspace))
    })
})
