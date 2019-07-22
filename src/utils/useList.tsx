import React from "react";
import { useStoreMap } from "effector-react";

export const useList = (list$, renderItem) => {
    const Item = React.useMemo(
        () =>
            React.memo(({ index }) => {
                const item = useStoreMap({
                    store: list$,
                    keys: [index],
                    fn: list => list[index]
                });
                return renderItem(item, index);
            }),
        [list$, renderItem]
    );
    const length = useStoreMap({
        store: list$,
        keys: [list$],
        fn: list => list.length
    });
    return Array.from({ length }, (_, i) => <Item index={i} key={i} />);
};
