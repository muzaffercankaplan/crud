import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import "./tableFooter.css";

const TableFooter = ({ total, limit, setLimit, skip, setSkip }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const options = [20, 30, 40, 50];
  for (let i = 10; i >= 1; i--) {
    options.unshift(i);
  }

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const changePageLimit = (e) => {
    setLimit(e.target.value);
    router.push(pathname + "?" + createQueryString("limit", e.target.value));
    // params.set(name, value);
  };

  return (
    <div className="tableFooter__container">
      <label className="tableFooter__pagesSize">
        Rows per page:
        <select
          value={+limit}
          onChange={changePageLimit}
          name="selectedPagesize"
        >
          {options.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </label>
      <div className="tableFooter__total">
        {1 + +skip}-{+limit + +skip <= total ? +limit + +skip : total} of{" "}
        {total}
      </div>
      <div className="tableFooter__arrow">
        <Link
          onClick={() => {
            limit < skip ? setSkip((prev) => +prev - +limit) : setSkip(0);
          }}
          href={
            skip < limit
              ? pathname + "?" + createQueryString("skip", 0)
              : pathname + "?" + createQueryString("skip", +skip - +limit)
          }
        >
          <Image alt="arrow" src={"/left.svg"} width={14} height={14} />
        </Link>
        <Link
          onClick={() => {
            +skip + +limit >= total
              ? setSkip(+total - 1)
              : setSkip((prev) => +prev + +limit);
          }}
          href={
            +skip + +limit > total
              ? pathname + "?" + createQueryString("skip", +total - 1)
              : pathname + "?" + createQueryString("skip", +skip + +limit)
          }
        >
          <Image
            alt="arrow"
            style={{ rotate: "180deg" }}
            src={"/left.svg"}
            width={14}
            height={14}
          />
        </Link>
      </div>
    </div>
  );
};

export default TableFooter;
