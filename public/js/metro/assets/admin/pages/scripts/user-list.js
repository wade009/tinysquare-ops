//require common/datautil.js
var TableAjax = function () {

    var initPickers = function () {
        //init date pickers
        $('.date-picker').datepicker({
            rtl: Metronic.isRTL(),
            autoclose: true
        });
    }

    var handleRecords = function () {

        var grid = new Datatable();

        grid.init({
            src: $("#datatable_ajax"),
            onSuccess: function (grid, response) {
                // grid:        grid object
                // response:    json object of server side ajax response
                // execute some code after table records loaded
            },
            onError: function (grid) {
                // execute some code on network or other general error

            },
            onDataLoad: function (grid) {
                // execute some code on ajax data load
            },
            loadingMessage: 'Loading...',
            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options

                // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
                // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/scripts/datatable.js).
                // So when dropdowns used the scrollable div should be removed.
                //"dom": "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r>t<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",
                "bStateSave": false, // 如果用户关闭页面后重新打开该页面，该列表会和关闭前的状态完全一样（长度，过滤，分页和排序）
                "paging": true, //全局控制列表的翻页功能,如果设为false,所有的默认翻页
                "lengthChange": false,
                "searching": true,//控制控件的搜索功能
                "serverSide": true,
                "lengthMenu": [
                    [10, 20, 50, 100, 150, -1],
                    [10, 20, 50, 100, 150, "All"] // change per page values here
                ],
                "pageLength": 10, // default record count per page
                "ajax": {
                    "url": "list", // ajax source
                    "data": function (d) {
                        var table = $('#datatable_ajax').DataTable();
                        d.page = (table != undefined) ? table.page.info().page : 0;
                        d.size = (table != undefined) ? table.page.info().length : 10;
                        //d.sort = d.columns[d.order[0].column].data + ',' + d.order[0].dir;
                        d.account = $("#account").val();
                        d.email = $("#email").val();
                        d.token = $("#token").val();
                        d.category = $("#category").val();
                        d.status = $("#status").val();
                        var from = $("#from").val();
                        if (from != null && from != "") {
                            from = dateMinString(from);
                        }
                        d.from = from;
                        var to = $("#to").val();
                        if (to != null && to != "") {
                            to = dateMaxString(to);
                        }
                        d.to = to;
                        //delete d.columns;
                        //delete d.search;
                        //delete d.order;
                    }
                },
                "columns": [
                    {
                        "data": "id",
                        "orderable": false
                    },
                    {
                        "data": "account",
                        "orderable": false
                    },
                    {
                        "data": "email",
                        "orderable": false
                    },
                    {
                        "data": "token",
                        "orderable": false
                    },
                    {
                        "data": "category",
                        "orderable": false,
                        "createdCell": function (nTd, sData, oData, iRow) {
                            var value = "";
                            switch (sData) {
                                case 1:
                                    value = "normal";
                                    break;
                                case 2:
                                    value = "shop";
                                    break;
                            }
                            $(nTd).html(value);
                        }
                    },
                    {
                        "data": "status",
                        "orderable": false,
                        "createdCell": function (nTd, sData, oData, iRow) {
                            var value = "";
                            switch (sData) {
                                case 0:
                                    value = "normal";
                                    break;
                                case 1:
                                    value = "invalid";
                                    break;
                            }
                            $(nTd).html(value);
                        }
                    },
                    {
                        "data": "entrydate",
                        "orderable": false,
                        "createdCell": function (nTd, sData, oData, iRow) {
                            var value = "";
                            if(sData != null && sData != ""){
                                value = dateString(sData);
                            }
                            $(nTd).html(value);
                        }
                    },
                    {
                        "data": null,
                        "orderable": false,
                        "createdCell": function (nTd, sData, oData, iRow) {

                            $(nTd).html("");
                        }
                    }
                ],
                "processing": true,
                //"pagingType": "full_numbers",
                "order": [
                    [1, "asc"]
                ]// set first column as a default sort by asc
            }
        });

        // handle group actionsubmit button click
        grid.getTableWrapper().on('click', '.table-group-action-submit', function (e) {
            e.preventDefault();
            var action = $(".table-group-action-input", grid.getTableWrapper());
            if (action.val() != "" && grid.getSelectedRowsCount() > 0) {
                grid.setAjaxParam("customActionType", "group_action");
                grid.setAjaxParam("customActionName", action.val());
                grid.setAjaxParam("id", grid.getSelectedRows());
                grid.getDataTable().ajax.reload();
                grid.clearAjaxParams();
            } else if (action.val() == "") {
                Metronic.alert({
                    type: 'danger',
                    icon: 'warning',
                    message: 'Please select an action',
                    container: grid.getTableWrapper(),
                    place: 'prepend'
                });
            } else if (grid.getSelectedRowsCount() === 0) {
                Metronic.alert({
                    type: 'danger',
                    icon: 'warning',
                    message: 'No record selected',
                    container: grid.getTableWrapper(),
                    place: 'prepend'
                });
            }
        });
    }

    return {

        //main function to initiate the module
        init: function () {

            initPickers();
            handleRecords();
        }

    };

}();