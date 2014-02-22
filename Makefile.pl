#!/usr/bin/perl

############################################################################
#                         Backup Old blocklists                            #
############################################################################
open(JS,"<javascript/nohate.js");
@JS = <JS>;
close(JS);
open(JSBAK,">javascript/nohate.js.BAK");
print(JSBAK @JS);
close(JSBAK);


open(ACL,"<ACL");
@BADREFS= <ACL>;
close(ACL);
chomp(@BADREFS);

print('var badRefs=new Array(');
print("\n");
$len = scalar(@BADREFS);
for ($i=0; $i<($len -1); $i++)
{
    print($BADREFS[$i]);
    print(',');
    print("\n");
}
print($BADREFS[$len]);
print("\n");

print << 'EOF';
);

var i;

for (i = 0; i < badRefs.length; ++i) 
{
    ref = badRefs[i];
    var BAD = ref.exec(document.referrer);
    if (BAD)  
        window.location.href = "https://en.wikipedia.org/wiki/Transphobia";
}
EOF
