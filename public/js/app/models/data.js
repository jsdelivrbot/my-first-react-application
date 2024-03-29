define('models/data', [

], function (

) {

    'use strict';

    var DataModel = function() {
        var logo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzA2cHgiIGhlaWdodD0iODBweCIgdmlld0JveD0iMCAwIDMwNiA4MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuMi4yICg5OTgzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5oZXJva3Utb24tbGlnaHQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iaGVyb2t1LW9uLWxpZ2h0IiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHBhdGggZD0iTTY0LjgsMCBMNy4yLDAgQzMuMiwwIDcuMTA1NDI3MzZlLTE1LDMuMiA3LjEwNTQyNzM2ZS0xNSw3LjIgTDcuMTA1NDI3MzZlLTE1LDcyLjggQzcuMTA1NDI3MzZlLTE1LDc2LjggMy4yLDgwIDcuMiw4MCBMNjQuOCw4MCBDNjguOCw4MCA3Miw3Ni44IDcyLDcyLjggTDcyLDcuMiBDNzIsMy4yIDY4LjgsMCA2NC44LDAgTDY0LjgsMCBMNjQuOCwwIFogTTY4LDcyLjggQzY4LDc0LjYgNjYuNiw3NiA2NC44LDc2IEw3LjIsNzYgQzUuNCw3NiA0LDc0LjYgNCw3Mi44IEw0LDcuMiBDNCw1LjQgNS40LDQgNy4yLDQgTDY0LjgsNCBDNjYuNiw0IDY4LDUuNCA2OCw3LjIgTDY4LDcyLjggTDY4LDcyLjggWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCw2OCBMMjcsNjAgTDE4LDUyIEwxOCw2OCBMMTgsNjggWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01MC41LDM1LjYgQzQ4LjksMzMuOSA0NS45LDMyIDQxLDMyIEMzNS42LDMyIDMwLDMzLjQgMjYsMzQuNyBMMjYsMTIgTDE4LDEyIEwxOCw0Ni43IEwyMy43LDQ0LjEgQzIzLjgsNDQuMSAzMi45LDQwIDQxLDQwIEM0NS4xLDQwIDQ2LDQyLjIgNDYsNDQuMSBMNDYsNjggTDU0LDY4IEw1NCw0NCBDNTQsNDMuNSA1NCwzOS4xIDUwLjUsMzUuNiBMNTAuNSwzNS42IEw1MC41LDM1LjYgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00MCwyNSBMNDgsMjUgQzUxLjYsMjAuOSA1My41LDE2LjUgNTQsMTIgTDQ2LDEyIEM0NS4xLDE2LjUgNDMuMSwyMC45IDQwLDI1IEw0MCwyNSBMNDAsMjUgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTIsMjguMSBDMTA3LjUsMjguMSAxMDEuOCwyOS4zIDk4LDMwLjggTDk4LDEyIEw5MCwxMiBMOTAsNjggTDk4LDY4IEw5OCwzNy42IEMxMDEuOSwzNS44IDEwNy40LDM0LjkgMTEwLjksMzQuOSBDMTEyLjYsMzQuOSAxMTQuMSwzNS44IDExNC4xLDM3LjkgTDExNC4xLDY4IEwxMjIsNjggTDEyMiwzOSBDMTIyLDMyLjcgMTE5LjMsMjguMSAxMTIsMjguMSBMMTEyLDI4LjEgTDExMiwyOC4xIFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQ2LjEsMjggQzEzOS40LDI4IDEzNCwyOC44IDEzMCwzMC40IEMxMjguNSwzNS45IDEyOCw0MS41IDEyOCw0OC4xIEMxMjgsNjAuMiAxMzAuMSw2OCAxNDMuNCw2OCBDMTQ5LjYsNjggMTU0LjgsNjYuMSAxNTkuMSw2NC4xIEwxNTcuOCw1Ny45IEMxNTMuOCw1OS41IDE0OC42LDYxLjEgMTQ0LDYxLjEgQzEzOC4xLDYxLjEgMTM2LjMsNTkuOSAxMzYsNTAuMSBMMTYwLDUwLjEgTDE2MCw0NS45IEMxNjAsMzQuOCAxNTYuNCwyOCAxNDYuMSwyOCBMMTQ2LjEsMjggTDE0Ni4xLDI4IFogTTEzNiw0NCBDMTM2LjEsMzkuOCAxMzYuNywzNS43IDEzNi43LDM1LjcgQzEzNi43LDM1LjcgMTQwLjcsMzQuOSAxNDYuMSwzNC45IEMxNTEuNSwzNC45IDE1MywzOC4zIDE1Myw0NCBMMTM2LDQ0IEwxMzYsNDQgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOTgsMjggTDI5OCw1OCBDMjk4LDU4IDI5Mi40LDYxIDI4NSw2MSBDMjgzLjMsNjEgMjgyLDYwLjMgMjgyLDU4LjIgTDI4MiwyOCBMMjc0LDI4IEwyNzQsNTcuMiBDMjc0LDYzLjUgMjc3LjMsNjggMjg0LDY4IEMyOTUuNiw2OCAzMDYsNjIgMzA2LDYyIEwzMDYsMjggTDI5OCwyOCBMMjk4LDI4IFoiIGlkPSJTaGFwZSIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjEwLDI4IEMxOTkuNCwyOCAxOTIsMzMuNiAxOTIsNDguMiBDMTkyLDYyIDE5Ny42LDY4IDIxMCw2OCBDMjIwLjYsNjggMjI4LDYyLjQgMjI4LDQ3LjggQzIyOCwzNCAyMjIuNCwyOCAyMTAsMjggTDIxMCwyOCBMMjEwLDI4IFogTTIxMCw2MiBDMjAzLjMsNjIgMjAwLjEsNTcuNiAyMDAuMSw0Ny45IEMyMDAuMSwzNy43IDIwNC4zLDM0IDIxMCwzNCBDMjE2LjcsMzQgMjE5LjksMzguNCAyMTkuOSw0OC4xIEMyMTkuOSw1OC4zIDIxNS43LDYyIDIxMCw2MiBMMjEwLDYyIEwyMTAsNjIgWiIgaWQ9IlNoYXBlIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNjYsNjggTDE3NCw2OCBMMTc0LDM4IEMxNzYuOSwzNi40IDE4MS43LDM1LjEgMTg4LDM1IEwxODgsMjguMSBDMTc1LjMsMjguMSAxNjYsMzQgMTY2LDM0IEwxNjYsNjggTDE2Niw2OCBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTI1NC41LDQ2LjcgQzI1OS43LDM5LjkgMjY0LDMzLjYgMjY2LjQsMjggTDI1OC4xLDI4IEMyNTUuMywzMy45IDI1MS45LDM5LjMgMjQ4LDQ0IEwyNDIsNDQgTDI0MiwxMiBMMjM0LDEyIEwyMzQsNjggTDI0Miw2OCBMMjQyLDUwIEwyNDgsNTAgQzI1MS45LDU0LjggMjU1LjcsNjAuNiAyNTkuNiw2OCBMMjY4LDY4IEMyNjQuMiw2MC40IDI1OS45LDUzLjIgMjU0LjUsNDYuNyBMMjU0LjUsNDYuNyBMMjU0LjUsNDYuNyBaIiBpZD0iU2hhcGUiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=';
        var data = [
            {
                id: 0,
                headerTxt: 'Metric name',
                limitTxt: 'Limit X reached',
                updatesTxt: '162 updates',
                periodeTxt: 'Monthly resolution'
            },
            {
                id: 1,
                headerTxt: 'Metric name',
                limitTxt: '',
                updatesTxt: '',
                periodeTxt: 'Monthly resolution'
            },
            {
                id: 2,
                headerTxt: 'Metric name',
                limitTxt: 'Limit X reached',
                updatesTxt: '',
                periodeTxt: 'Monthly resolution'
            },
            {
                id: 3,
                headerTxt: 'Metric name',
                limitTxt: '',
                updatesTxt: '',
                periodeTxt: ''
            }
        ];

        return {
            getAll: function() {
                return data;
            },
            removeItem: function(index) {
                data.splice(index, 1);
            },
            getLogo: function() {
                return logo;
            }
        };
    };

    return DataModel;
});
