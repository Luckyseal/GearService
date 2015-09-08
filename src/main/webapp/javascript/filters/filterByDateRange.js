/**
 * Filter filterByDateRange filters array by date range.
 * @param items is array for filtering
 * @param from is minimal date in filtering
 * @param to is maximal date in filtering
 * @returns array items where date less that to-date and more than from-date
 *
 * @version 1.0
 * @author Dmitry
 * @since 04.09.2015
 */
app.filter("filterByDateRange", [function() {
    return function (items, from, to) {

        if(from == null && to == null)
            return items;

        var dateFrom = from != null ? moment(from).unix() : moment("1899-12-31T21:00:00.000Z").unix();
        var dateTo = to != null ? moment(to).unix() : moment("2999-12-31T21:00:00.000Z").unix();
        var introduced = null;
        var result = [];

        angular.forEach(items, function (item) {
            introduced = moment(item.introduced).unix();
            if (dateFrom < introduced && introduced < dateTo)
                result.push(item);
        });

        return result;
    }
}]);