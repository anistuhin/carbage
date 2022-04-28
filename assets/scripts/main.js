(function($) {
    $(document).ready(function() {
        $(document).on('click', '#logo', function() {
            $('#home').click();
        });
        $(document).on('click', '.modal-close', function() {
            $('#modal').removeClass('active');
        });
        $(document).on('click', '.cb-link', function() {
            $('#modal').addClass('active');
        });
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
        $(document).on('click', '#home-location', function() {
            $(this).parent().children('.cb-input').val("410 S Morgan St, Chicago, IL 60607");
        });
        $(document).on('click', '#home', function() {
            $('#main').attr("data-id", '0');
        });
        $(document).on('click', '#home-next', function() {
            $('#main').attr("data-id", '1');
            // $('#home').removeClass('active');
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
            $('#main-content .emissions-section').attr('data-id', 0);
            $('#main').attr("data-id", '8');
        });
        $(document).on('click', '.locations-list-left li:not(.active), .reduce-cf-left li:not(.active)', function() {
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
        $(document).on('change', '.emissions-sort', function() {
            $('#left-sidebar .emissions-section').attr('data-id', $(this).val());
        });
        $(document).on('click', '.reduce-cf-filter li button:not(.active)', function() {
            $('#main-content .emissions-section').attr('data-id', $(this).attr('data-id'));
        });
        $(".from-date, .to-date").datepicker();
        $('.emissions-sort').val(0);

        // Bar Chart
        require(["assets/scripts/d3.v3.min.js"], function(d3) {
            // d3.tip
            // Copyright (c) 2013 Justin Palmer
            //
            // Tooltips for d3.js SVG visualizations

            // Public - contructs a new tooltip
            //
            // Returns a tip
            d3.tip = function() {
                var direction = d3_tip_direction,
                    offset = d3_tip_offset,
                    html = d3_tip_html,
                    node = initNode(),
                    svg = null,
                    point = null,
                    target = null

                function tip(vis) {
                    svg = getSVGNode(vis)
                    point = svg.createSVGPoint()
                    document.body.appendChild(node)
                }

                // Public - show the tooltip on the screen
                //
                // Returns a tip
                tip.show = function() {
                    var args = Array.prototype.slice.call(arguments)
                    if (args[args.length - 1] instanceof SVGElement) target = args.pop()

                    var content = html.apply(this, args),
                        poffset = offset.apply(this, args),
                        dir = direction.apply(this, args),
                        nodel = d3.select(node),
                        i = 0,
                        coords

                    nodel.html(content)
                        .style({ opacity: 1, 'pointer-events': 'all' })

                    while (i--) nodel.classed(directions[i], false)
                    coords = direction_callbacks.get(dir).apply(this)
                    nodel.classed(dir, true).style({
                        top: (coords.top + poffset[0]) + 'px',
                        left: (coords.left + poffset[1]) + 'px'
                    })

                    return tip
                }

                // Public - hide the tooltip
                //
                // Returns a tip
                tip.hide = function() {
                    nodel = d3.select(node)
                    nodel.style({ opacity: 0, 'pointer-events': 'none' })
                    return tip
                }

                // Public: Proxy attr calls to the d3 tip container.  Sets or gets attribute value.
                //
                // n - name of the attribute
                // v - value of the attribute
                //
                // Returns tip or attribute value
                tip.attr = function(n, v) {
                    if (arguments.length < 2 && typeof n === 'string') {
                        return d3.select(node).attr(n)
                    } else {
                        var args = Array.prototype.slice.call(arguments)
                        d3.selection.prototype.attr.apply(d3.select(node), args)
                    }

                    return tip
                }

                // Public: Proxy style calls to the d3 tip container.  Sets or gets a style value.
                //
                // n - name of the property
                // v - value of the property
                //
                // Returns tip or style property value
                tip.style = function(n, v) {
                    if (arguments.length < 2 && typeof n === 'string') {
                        return d3.select(node).style(n)
                    } else {
                        var args = Array.prototype.slice.call(arguments)
                        d3.selection.prototype.style.apply(d3.select(node), args)
                    }

                    return tip
                }

                // Public: Set or get the direction of the tooltip
                //
                // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
                //     sw(southwest), ne(northeast) or se(southeast)
                //
                // Returns tip or direction
                tip.direction = function(v) {
                    if (!arguments.length) return direction
                    direction = v == null ? v : d3.functor(v)

                    return tip
                }

                // Public: Sets or gets the offset of the tip
                //
                // v - Array of [x, y] offset
                //
                // Returns offset or
                tip.offset = function(v) {
                    if (!arguments.length) return offset
                    offset = v == null ? v : d3.functor(v)

                    return tip
                }

                // Public: sets or gets the html value of the tooltip
                //
                // v - String value of the tip
                //
                // Returns html value or tip
                tip.html = function(v) {
                    if (!arguments.length) return html
                    html = v == null ? v : d3.functor(v)

                    return tip
                }

                function d3_tip_direction() { return 'n' }

                function d3_tip_offset() { return [0, 0] }

                function d3_tip_html() { return ' ' }

                var direction_callbacks = d3.map({
                        n: direction_n,
                        s: direction_s,
                        e: direction_e,
                        w: direction_w,
                        nw: direction_nw,
                        ne: direction_ne,
                        sw: direction_sw,
                        se: direction_se
                    }),

                    directions = direction_callbacks.keys()

                function direction_n() {
                    var bbox = getScreenBBox()
                    return {
                        top: bbox.n.y - node.offsetHeight,
                        left: bbox.n.x - node.offsetWidth / 2
                    }
                }

                function direction_s() {
                    var bbox = getScreenBBox()
                    return {
                        top: bbox.s.y,
                        left: bbox.s.x - node.offsetWidth / 2
                    }
                }

                function direction_e() {
                    var bbox = getScreenBBox()
                    return {
                        top: bbox.e.y - node.offsetHeight / 2,
                        left: bbox.e.x
                    }
                }

                function direction_w() {
                    var bbox = getScreenBBox()
                    return {
                        top: bbox.w.y - node.offsetHeight / 2,
                        left: bbox.w.x - node.offsetWidth
                    }
                }

                function direction_nw() {
                    var bbox = getScreenBBox()
                    return {
                        top: bbox.nw.y - node.offsetHeight,
                        left: bbox.nw.x - node.offsetWidth
                    }
                }

                function direction_ne() {
                    var bbox = getScreenBBox()
                    return {
                        top: bbox.ne.y - node.offsetHeight,
                        left: bbox.ne.x
                    }
                }

                function direction_sw() {
                    var bbox = getScreenBBox()
                    return {
                        top: bbox.sw.y,
                        left: bbox.sw.x - node.offsetWidth
                    }
                }

                function direction_se() {
                    var bbox = getScreenBBox()
                    return {
                        top: bbox.se.y,
                        left: bbox.e.x
                    }
                }

                function initNode() {
                    var node = d3.select(document.createElement('div'))
                    node.style({
                        position: 'absolute',
                        opacity: 0,
                        pointerEvents: 'none',
                        boxSizing: 'border-box'
                    })

                    return node.node()
                }

                function getSVGNode(el) {
                    el = el.node()
                    if (el.tagName.toLowerCase() == 'svg')
                        return el

                    return el.ownerSVGElement
                }

                // Private - gets the screen coordinates of a shape
                //
                // Given a shape on the screen, will return an SVGPoint for the directions
                // n(north), s(south), e(east), w(west), ne(northeast), se(southeast), nw(northwest),
                // sw(southwest).
                //
                //    +-+-+
                //    |   |
                //    +   +
                //    |   |
                //    +-+-+
                //
                // Returns an Object {n, s, e, w, nw, sw, ne, se}
                function getScreenBBox() {
                    var targetel = target || d3.event.target,
                        bbox = {},
                        matrix = targetel.getScreenCTM(),
                        tbbox = targetel.getBBox(),
                        width = tbbox.width,
                        height = tbbox.height,
                        x = tbbox.x,
                        y = tbbox.y,
                        scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                        scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft


                    point.x = x + scrollLeft
                    point.y = y + scrollTop
                    bbox.nw = point.matrixTransform(matrix)
                    point.x += width
                    bbox.ne = point.matrixTransform(matrix)
                    point.y += height
                    bbox.se = point.matrixTransform(matrix)
                    point.x -= width
                    bbox.sw = point.matrixTransform(matrix)
                    point.y -= height / 2
                    bbox.w = point.matrixTransform(matrix)
                    point.x += width
                    bbox.e = point.matrixTransform(matrix)
                    point.x -= width / 2
                    point.y -= height / 2
                    bbox.n = point.matrixTransform(matrix)
                    point.y += height
                    bbox.s = point.matrixTransform(matrix)

                    return bbox
                }

                return tip
            };

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
                    return "Frequency: <span style='color: #d81e5b'>" + d.frequency + "</span>";
                })
            var svg = d3.select("#barchart").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            svg.call(tip);
            d3.csv("assets/data/data.csv", type, function(error, data) {
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
        // pie chart
        require(["assets/scripts/d3.v4.min.js"], function(d3) {
            var myDuration = 600;
            var firstTime = true;
            var width = 250,
                height = 250,
                radius = Math.min(width, height) / 2;
            var color = d3.scaleOrdinal(d3.schemeCategory20);
            var pie = d3.pie()
                .value(function(d) { return d.count; })
                .sort(null);
            var arc = d3.arc()
                .innerRadius(radius - 50)
                .outerRadius(radius - 0);
            var svg = d3.select("#pie-chart").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            d3.tsv("assets/data/data.tsv", type, function(error, data) {
                var regionsByFruit = d3.nest()
                    .key(function(d) { return d.fruit; })
                    .entries(data)
                    .reverse();
                var label = d3.select("form").selectAll("label")
                    .data(regionsByFruit)
                    .enter().append("label");
                label.append("input")
                    .attr("type", "radio")
                    .attr("name", "fruit")
                    .attr("value", function(d) { return d.key; })
                    .on("change", change)
                    .filter(function(d, i) { return !i; })
                    .each(change)
                    .property("checked", true);
                label.append("span")
                    .text(function(d) { return d.key; });

                function change(region) {
                    var path = svg.selectAll("path");
                    var data0 = path.data(),
                        data1 = pie(region.values);
                    path = path.data(data1, key);
                    path
                        .transition()
                        .duration(myDuration)
                        .attrTween("d", arcTween)
                    path
                        .enter()
                        .append("path")
                        .each(function(d, i) {
                            var narc = findNeighborArc(i, data0, data1, key);
                            if (narc) {
                                this._current = narc;
                                this._previous = narc;
                            } else {
                                this._current = d;
                            }
                        })
                        .attr("fill", function(d, i) {
                            return color(d.data.region)
                        })
                        .transition()
                        .duration(myDuration)
                        .attrTween("d", arcTween)
                    path
                        .exit()
                        .transition()
                        .duration(myDuration)
                        .attrTween("d", function(d, index) {
                            var currentIndex = this._previous.data.region;
                            var i = d3.interpolateObject(d, this._previous);
                            return function(t) {
                                return arc(i(t))
                            }
                        })
                        .remove()
                    firstTime = false;
                }
            });

            function key(d) {
                return d.data.region;
            }

            function type(d) {
                d.count = +d.count;
                return d;
            }

            function findNeighborArc(i, data0, data1, key) {
                var d;
                if (d = findPreceding(i, data0, data1, key)) {
                    var obj = cloneObj(d)
                    obj.startAngle = d.endAngle;
                    return obj;
                } else if (d = findFollowing(i, data0, data1, key)) {
                    var obj = cloneObj(d)
                    obj.endAngle = d.startAngle;
                    return obj;
                }
                return null


            }
            // Find the element in data0 that joins the highest preceding element in data1.
            function findPreceding(i, data0, data1, key) {
                var m = data0.length;
                while (--i >= 0) {
                    var k = key(data1[i]);
                    for (var j = 0; j < m; ++j) {
                        if (key(data0[j]) === k) return data0[j];
                    }
                }
            }
            // Find the element in data0 that joins the lowest following element in data1.
            function findFollowing(i, data0, data1, key) {
                var n = data1.length,
                    m = data0.length;
                while (++i < n) {
                    var k = key(data1[i]);
                    for (var j = 0; j < m; ++j) {
                        if (key(data0[j]) === k) return data0[j];
                    }
                }
            }

            function arcTween(d) {
                var i = d3.interpolate(this._current, d);
                this._current = i(0);
                return function(t) {
                    return arc(i(t))
                }
            }

            function cloneObj(obj) {
                var o = {};
                for (var i in obj) {
                    o[i] = obj[i];
                }
                return o;
            }
        });
    });
})(window.jQuery);