(function($) {
    $(document).ready(function() {
        $(document).on('click', '#add-garbage-btn', function() {
            $(this).parent().children('.cb-input').prop('readonly', true);
            $(this).parent().children('select').prop('disabled', true);
            $(this).before('<button class="cb-button cb-button-secondary edit-garbage-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"/></svg></button>');
            $(this).before('<button class="cb-button cb-button-secondary delete-garbage-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg></button>');
            $(this).parent().after(`
                <div class="garbage-row">
                    <input class="cb-input" type="text" name="type" placeholder="Garbage type">
                    <input class="cb-input" type="text" name="amouunt" placeholder="Quantity">
                    <select class="cb-input" name="qty">
                        <option>Unit</option>
                        <option>Count</option>
                        <option>Oz</option>
                        <option>lb</option>
                        <option>Kg</option>
                    </select>
                    <button class="cb-button" id="add-garbage-btn">Add</button>
                </div>
            `);
            $(this).remove();
        });
        $(document).on('click', '.delete-garbage-btn', function() {
            $(this).parent('.garbage-row').remove();
        });
        $(document).on('click', '.edit-garbage-btn', function() {
            $(this).parent('.garbage-row').children('.cb-input').prop('readonly', false);
            $(this).parent().children('select').prop('disabled', false);
            $(this).parent('.garbage-row').children('.cb-input:first-child').focus();
        });
        $(document).on('click', '#track-location', function() {
            $(this).parent().children('.cb-input').val("ERF 2068, 842 W Taylor St, Chicago, IL 60607");
        });
        $(document).on('click', '#home', function() {
            $('#main').attr("data-id", '0');
        });
        $(document).on('click', '#home-next', function() {
            $('#main').attr("data-id", '1');
            $('#home').removeClass('active');
        });
        $(document).on('click', '#choices-prev', function() {
            $('#main').attr("data-id", '0');
        });
        $(document).on('click', '#dispose', function() {
            $('#main').attr("data-id", '2');
        });
        $(document).on('click', '#dispose-prev, #reduce-prev, #emissions-prev', function() {
            $('#main').attr("data-id", '1');
        });
        $(document).on('click', '#reuse', function() {
            $('#main').attr("data-id", '3');
        });
        $(document).on('click', '#emissions', function() {
            $('#main').attr("data-id", '4');
        });
        $(document).on('click', '#reduce-cf', function() {
            $('#main').attr("data-id", '5');
        });
        $(document).on('click', '#help', function() {
            $('#main').attr("data-id", '6');
        });
        $(document).on('click', '#profile', function() {
            $('#main').attr("data-id", '7');
        });
        $(document).on('click', '#cf-score', function() {
            $('#main').attr("data-id", '8');
        });
        $(document).on('click', '.locations-list-left li button:not(.active), .reduce-cf-left li:not(.active)', function() {
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
        });
        $(document).on('click', '#center-menu li:not(.active)', function() {
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
            $('#right-menu .active').removeClass('active');
        });
        $(document).on('click', '#right-menu li:not(.active)', function() {
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
            $('#center-menu .active').removeClass('active');
        });
        $(document).on('click', '.left-filters li button:not(.active)', function() {
            $(this).parents('ul').find('.active').removeClass('active');
            $(this).addClass('active');
        });

        // Bar Chart
        var margin = { top: 40, right: 20, bottom: 30, left: 40 },
            width = 680 - margin.left - margin.right,
            height = 350 - margin.top - margin.bottom;

        var formatPercent = d3.format(".0%");

        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
                return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
            })

        var svg = d3.select("#barchart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.call(tip);

        d3.csv("data.csv", type, function(error, data) {
            x.domain(data.map(function(d) { return d.letter; }));
            y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Frequency");

            svg.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d) { return x(d.letter); })
                .attr("width", x.rangeBand())
                .attr("y", function(d) { return y(d.frequency); })
                .attr("height", function(d) { return height - y(d.frequency); })
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide)

        });

        function type(d) {
            d.frequency = +d.frequency;
            return d;
        }
    });

})(window.jQuery);