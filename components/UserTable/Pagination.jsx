import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function Pagination({ page, totalPages }) {
  const router = useRouter();
  const DOTS = "...";

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      router.push(`?page=${newPage}`);
    }
  };

  const buttonStyles = cn(
    "hover:bg-primary hover:text-primary-foreground",
    "active:bg-primary/90",
    "disabled:hover:bg-muted disabled:hover:text-muted-foreground",
    "transition-colors"
  );

  const renderPaginationButtons = () => {
    const showDots = totalPages > 7;

    return Array.from({ length: totalPages }, (_, i) => {
      const pageNumber = i + 1;

      if (
        pageNumber === 1 ||
        pageNumber === totalPages ||
        (pageNumber >= page - 1 && pageNumber <= page + 1) ||
        (!showDots && pageNumber <= 7)
      ) {
        return (
          <Button
            key={pageNumber}
            variant={page === pageNumber ? "default" : "secondary"}
            size="sm"
            onClick={() => handlePageChange(pageNumber)}
            className={buttonStyles}
          >
            {pageNumber}
          </Button>
        );
      }

      if (
        (showDots && pageNumber === 2) ||
        (showDots && pageNumber === totalPages - 1)
      ) {
        return (
          <Button
            key={`dots-${pageNumber}`}
            variant="secondary"
            size="sm"
            disabled
            className={buttonStyles}
          >
            {DOTS}
          </Button>
        );
      }

      return null;
    }).filter(Boolean);
  };

  return (
    <div className="flex justify-center space-x-2 py-4">
      <Button
        variant="secondary"
        size="sm"
        onClick={() => handlePageChange(page - 1)}
        disabled={page <= 1}
        className={buttonStyles}
      >
        Previous
      </Button>
      {renderPaginationButtons()}
      <Button
        variant="secondary"
        size="sm"
        onClick={() => handlePageChange(page + 1)}
        disabled={page >= totalPages}
        className={buttonStyles}
      >
        Next
      </Button>
    </div>
  );
}
