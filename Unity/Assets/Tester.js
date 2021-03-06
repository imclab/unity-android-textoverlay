#pragma strict

function Start() {
    TextOverlay.Install(10, 10, Screen.width - 20, Screen.height - 20);

    while (true) {
        for (var i = 8; i <= 40; i += 8) {
            ResetText(i);
            while (true) {
                yield;
                if (Input.GetMouseButtonDown(0)) break;
            }
        }
    }
}

function ResetText(textSize : int) {
    var text : String;
    
    text = "こんにちは 你好 안녕하세요 สวัสดี Привет Hello\n";

    text += "祇園精舎の鐘の声 諸行無常の響あり 沙羅双樹の花の色 盛者必衰の理をあらはす\n";
    text += "觀自在菩薩行深般若波羅蜜多時照見五薀皆空度一切苦厄\n";
    
    text += "au: ";
    for (var i = 0; i < 64; i++) text += System.Convert.ToChar(0xe468 + i);
    text += "\n";

    text += "docomo: ";
    for (i = 0; i < 64; i++) text += System.Convert.ToChar(0xe63e + i);
    text += "\n";

    text += "SoftBank: ";
    for (i = 0; i < 64; i++) text += System.Convert.ToChar(0xe001 + i);
    text += "\n";

    text += "グーチョキパー(Unicode 6.0): ";
    text += System.Convert.ToChar(0x270a);
    text += System.Convert.ToChar(0x270c);
    text += System.Convert.ToChar(0x270b);

    TextOverlay.SetText(text, textSize);
}
