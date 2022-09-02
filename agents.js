var a=1;
function show_video(id)

{
    if(a==1)
    {
        document.getElementById(id).style.display="inline";
        return a=0;
    }
    else
    {
        document.getElementById(id).style.display="none";
        return a=1;
    }

}


function show_div(id)
{
document.getElementById(id).style.display="inline";
}

function hide_div(id)
{
document.getElementById(id).style.display="none";
}
