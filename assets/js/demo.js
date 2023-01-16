$(document).ready(function () {

	var format = window.sqlFormatter.format;
	let query = `
			SELECT  l_returnflag
				,l_linestatus
				,SUM(l_quantity)                               AS sum_qty
				,SUM(l_extendedprice)                          AS sum_base_price
				,SUM(l_extendedprice*(1-l_discount))           AS sum_disc_price
				,SUM(l_extendedprice*(1-l_discount)*(1+l_tax)) AS sum_charge
				,AVG(l_quantity)                               AS avg_qty
				,AVG(l_extendedprice)                          AS avg_price
				,AVG(l_discount)                               AS avg_disc
				,COUNT(l_discount)                             AS count_order
			FROM lineitem_pg
			WHERE l_shipdate <= date '1998-12-01' - interval '90' day
			GROUP BY  l_returnflag
					 ,l_linestatus;`;
	document.querySelector("#query_content").innerHTML = format(query);


	$("#output").click(function (event) {
		event.preventDefault();
		var query_select = $("#query_select option:selected").val();
		var data_select = $("#data_select option:selected").val();
		var database = false;
		
		var baseUrl = "http://192.168.2.17:8000/query/";
		var getUrl = baseUrl + query_select + "?" + "vidardb=" + database;

		if (data_select == "vidardb") {
			database = true;
			$("#result2").html("");
			$.get(getUrl, function (data) {
				var queryResult = data.data;
				var timeResult = data.time;
				queryResult = queryResult + "\n" + "<b> Query Time:" + timeResult
				var formatedData = queryResult.replace(/\r\n|\r|\n/g,"<br>");
				$("#result2").html(formatedData);
			});
		} else {
			$("#result1").html("");
			$.get(getUrl, function (data) {
				var queryResult = data.data;
				var timeResult = data.time;
				queryResult = queryResult + "\n" + "<b> Query Time:" + timeResult
				var formatedData = queryResult.replace(/\r\n|\r|\n/g,"<br>");
				$("#result1").html(formatedData);
			});
		}

		
	});

	$("#query_select").change(function(event){
		event.preventDefault();
		var query_select = $("#query_select option:selected").val();
		var format = window.sqlFormatter.format;

		if (query_select == 1) {
			let query = `
			SELECT  l_returnflag
				,l_linestatus
				,SUM(l_quantity)                               AS sum_qty
				,SUM(l_extendedprice)                          AS sum_base_price
				,SUM(l_extendedprice*(1-l_discount))           AS sum_disc_price
				,SUM(l_extendedprice*(1-l_discount)*(1+l_tax)) AS sum_charge
				,AVG(l_quantity)                               AS avg_qty
				,AVG(l_extendedprice)                          AS avg_price
				,AVG(l_discount)                               AS avg_disc
				,COUNT(l_discount)                             AS count_order
			FROM lineitem_pg
			WHERE l_shipdate <= date '1998-12-01' - interval '90' day
			GROUP BY  l_returnflag
					 ,l_linestatus;`;
			document.querySelector("#query_content").innerHTML = format(query);
		} else if (query_select == 6) {
			let query = `
			SELECT SUM(l_extendedprice*l_discount) AS revenue
            FROM lineitem
            WHERE l_shipdate >= date '1994-01-01' 
            AND l_shipdate < date '1994-01-01' + interval '1' year 
            AND l_discount BETWEEN 0.06 - 0.01 AND 0.06 + 0.01 
            AND l_quantity < 24;`;        
			document.querySelector("#query_content").innerHTML = format(query);
		} else if (query_select == 14) {
			let query = `
			SELECT  100.00 * SUM(case WHEN p_type like 'PROMO%' THEN l_extendedprice*(1-l_discount) else 0 end) / SUM(l_extendedprice * (1 - l_discount)) AS promo_revenue
			FROM lineitem, part
			WHERE l_partkey = p_partkey 
			AND l_shipdate >= date '1995-09-01' 
			AND l_shipdate < date '1995-09-01' + interval '1' month;`;        
			document.querySelector("#query_content").innerHTML = format(query);
		} else if (query_select == 19) {
			let query = `
			SELECT  SUM(l_extendedprice* (1 - l_discount)) AS revenue
			FROM lineitem, part
			WHERE ( p_partkey = l_partkey AND p_brand = 'Brand#12'
			AND p_container IN ('SM CASE', 'SM BOX', 'SM PACK', 'SM PKG') 
			AND l_quantity >= 1 
			AND l_quantity <= 1 + 10 
			AND p_size BETWEEN 1 
			AND 5 
			AND l_shipmode IN ('AIR', 'REG AIR') 
			AND l_shipinstruct = 'DELIVER IN PERSON' ) 
			OR ( p_partkey = l_partkey 
			AND p_brand = 'Brand#23' 
			AND p_container IN ('MED BAG', 'MED BOX', 'MED PKG', 'MED PACK') 
			AND l_quantity >= 10 
			AND l_quantity <= 10 + 10 
			AND p_size BETWEEN 1 
			AND 10 
			AND l_shipmode IN ('AIR', 'REG AIR') 
			AND l_shipinstruct = 'DELIVER IN PERSON' ) 
			OR ( p_partkey = l_partkey AND p_brand = 'Brand#34' 
			AND p_container IN ('LG CASE', 'LG BOX', 'LG PACK', 'LG PKG') 
			AND l_quantity >= 20 
			AND l_quantity <= 20 + 10 
			AND p_size BETWEEN 1 
			AND 15 
			AND l_shipmode IN ('AIR', 'REG AIR') 
			AND l_shipinstruct = 'DELIVER IN PERSON' );`;        
			document.querySelector("#query_content").innerHTML = format(query);
		}

	})
});
