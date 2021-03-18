	$(function() {
					totl();
					adddel()
						//select all
					$("#all").click(function() {
							all = $(this).prop("checked")
							$(".Each").each(function() {
								$(this).prop("checked", all);
							})
						})
						//delete selected line
					$(".del").each(function() {
							$(this).click(function() {
								$(this).parent().remove();
								if($(".imfor").length == 0) {
								    $("#susum").text(0);
								    $("#susum1").text(0);
								    $("#susum2").text(0);
								}
								totl();
							})
						})
						//add line
					$(".foot_add").click(function() {
							var str = '<div class="imfor">' +
								'<div class="check">' +
								'<input type="checkbox" class="Each" />' +
								'</div>' +
								'<div class="pudc"><img src="images/tonka.jpg"  width="100"/><span>Tonka 25</span></div>' +
								'<div class="pices">20.00</div>' +
								'<div class="num"><span class="reduc">&nbsp;-&nbsp;</span><input type="text" value="1" /><span class="add">&nbsp;+</span></div>' +
								'<div class="totle">20</div>' +
								'<div class="del">del</div>' +
								'</div>';
							$(this).parent().prev().append(str);
							totl();
							adddel()
							$(".del").each(function() {
								$(this).click(function() {
									$(this).parent().remove();
									totl();
								})
							})
						})
						//delete all										
					$(".foot_del").click(function() {
						$(".Each").each(function() {
							if($(this).prop('checked')) {
								$(this).parents(".imfor").remove();
								totl();
								if($(".imfor").length == 0) {
								    $("#susum").text(0);
								    $("#susum1").text(0);
								    $("#susum2").text(0);
								}
							}
						})

					})

				})
				//summary
			function totl() {
				var sum = 0;
				$(".totle").each(function() {
					sum += parseFloat($(this).text());
					$("#susum").text(sum);
					$("#susum1").text(sum);
					$("#susum2").text(sum);
				})
			}
			function adddel(){
				//plus and minus in left cart total
					//plus
					$(".add").each(function() {
							$(this).click(function() {
								var $multi = 0;
								var vall = $(this).prev().val();
								vall++;
								$(this).prev().val(vall);
								$multi = parseFloat(vall) * parseFloat($(this).parent().prev().text());
								$(this).parent().next().text(Math.round($multi));
								totl();
							})

						})
						//minus
					$(".reduc").each(function() {
							$(this).click(function() {
								var $multi1 = 0;
								var vall1 = $(this).next().val();
								vall1--;
								if(vall1 <= 0) {
									vall1 = 1;
								}
								$(this).next().val(vall1);
								$multi1 = parseFloat(vall1) * parseFloat($(this).parent().prev().text());
								$(this).parent().next().text(Math.round($multi1));
								totl();
							})

						})
			}
