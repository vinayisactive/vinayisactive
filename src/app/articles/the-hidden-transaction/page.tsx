import {
  ArticleDescription,
  ArticleHeader,
  ArticleSectionWithHeading,
  ArticleWrapper,
} from "@/components/article-comps";
import Image from "next/image";
import Link from "next/link";
import client_backend_process_diagram from "../../../../public/client-backend-process.svg";
import transaction_det from "../../../../public/transaction-det.svg";
import inside_transaction from "../../../../public/inside-transaction.svg";
import control_back_diagram from "../../../../public/control-back-diagram.svg";

function Article() {
  return (
    <ArticleWrapper>
      <ArticleHeader
        heading="The Hidden Transaction"
        date="2025 . 04 . 26"
        className="mt-10"
      />

      <ArticleDescription className="mt-10">
        <p className="text-base">
          <span className="font-semibold pr-1">
            Even if your query isn’t a transaction, it is a transaction, bahaha,
          </span>
          Hey, I’m Vinay and recently I was diving into PostgreSQL architecture
          because
          <Link
            href="https://x.com/arpit_bhayani"
            className="underline underline-offset-2 px-1"
          >
            Arpit Bhayani’s
          </Link>
          content totally spiked up my curiosity to read more about databases.
          <br />
          <br />
          I use PostgreSQL in all my projects anyway, so I thought, why not
          understand it a little deeper? While reading, I stumbled across a
          behavior most people don’t even realize exists, and thought of writing
          this article.
          <br />
          <br />
          Go through the article and make yourself aware — hopefully you’ll end
          up loving PostgreSQL even more after this!
        </p>
      </ArticleDescription>

      <ArticleSectionWithHeading
        className="mt-24"
        heading="Wide view of article"
      >
        <div className="mt-5 text-base flex flex-col justify-start items-start gap-4">
          <Link
            href="#backend_process"
            className="hover:underline underline-offset-2"
          >
            ㆍLet&apos;s first talk about how a query even reaches the backend
            process?
          </Link>

          <Link
            href="#transaction_determination"
            className="hover:underline underline-offset-2"
          >
            ㆍInside the backend process: parsing and transaction determination
          </Link>

          <Link
            href="#transaction_encapsulated_processes"
            className="hover:underline underline-offset-2"
          >
            ㆍOperations and steps encapsulated within the transaction context
          </Link>

          <Link
            href="#returning_the_control"
            className="hover:underline underline-offset-2"
          >
            ㆍExecutor returning back the control to Transaction Manager
          </Link>
        </div>
      </ArticleSectionWithHeading>

      <ArticleSectionWithHeading
        className="mt-24"
        heading="Let's first talk about how a query even reaches the backend process ?"
        id="backend_process"
      >
        <div className="relative w-full mt-2 overflow-hidden">
          <Image
            src={client_backend_process_diagram}
            alt="Client-backend process"
            className="object-cover"
          />
        </div>

        <div className="mt-6 text-base">
          <p>
            So, <span className="font-semibold">Postmaster</span> is the main
            server process that is always listening for incoming connections on
            a specified port number (5432 is default), and whenever this process
            recieves a connection request, it spaws a new{" "}
            <span className="font-semibold">&quot;backend process&quot; </span>{" "}
            dedicated to handling that client&apos;s session.
          </p>

          <p className="mt-4">
            this child
            <span className="font-semibold">
              &quot;backend process&quot;
            </span>{" "}
            manages all the interactions with client from parsing of the query
            to the exectuion.
          </p>
        </div>
      </ArticleSectionWithHeading>

      <ArticleSectionWithHeading
        className="mt-24"
        heading="Inside the backend process: parsing and transaction determination"
        id="transaction_determination"
      >
        <div className="text-base">
          <div className="relative w-full  overflow-hidden">
            <Image
              src={transaction_det}
              alt="Client-backend process"
              className="object-cover"
            />
          </div>

          <p>
            Once the backend process receives the query, it first invokes the
            <span className="font-semibold">RAW PARSER</span> (built with FLEX
            and BISON) to check SQL syntax and produce the initial
            <span className="font-semibold">&quot;Parse Tree&quot;</span>
          </p>

          <p className="mt-4">
            <span className="font-semibold">Note: </span>
            FLEX and BISON transform
            <span className="px-2 bg-gray-200 rounded-sm">scan.l</span> and
            <span className="px-2 bg-gray-200 rounded-sm">gram.y</span> files to
            C file, these auto-generated C files implement the lexar grammer.
          </p>

          <p className="mt-8">
            By the first node of the
            <span className="font-semibold">Parse tree</span>, Postgresql
            figures out wheather the query is a
            <span className="font-semibold">&quot;Implicit&quot;</span> or{" "}
            <span className="font-semibold">&quot;Explicit&quot;</span>{" "}
            transaction.
          </p>

          <ul className="mt-6 space-y-2">
            <li>
              ㆍ <span className="font-semibold">Implicit transaction</span> =
              standalone queries like SELECT
            </li>
            <li>
              ㆍ <span className="font-semibold">Explicit transaction</span> =
              queries that starts with BEGIN/COMMIT
            </li>
          </ul>

          <p className="mt-6">
            The transaction is handled in two primary ways only,{" "}
            <span className="font-semibold">
              implicit{" "}
              <span className="font-normal text-xs px-2 bg-gray-200 rounded-md">
                (autocommit)
              </span>
            </span>{" "}
            and <span className="font-semibold">explicit</span> transaction.
            PostgreSql by default operates in autocommit mode, meaing{" "}
            <span className="font-semibold">
              each individual statement is treated as a seprate transaction.
            </span>
          </p>

          <p className="mt-4">
            After transaction determination, the PostgreSql calls{" "}
            <span className="px-2 bg-gray-200 rounded-sm">
              StartTransactionCommand
            </span>{" "}
            function to initiate an active{" "}
            <span className="px-2 bg-gray-200 font-semibold rounded-sm">
              Transaction Context
            </span>{" "}
            using (XID, snapshot, Locks)
          </p>
        </div>
      </ArticleSectionWithHeading>

      <ArticleSectionWithHeading
        className="mt-24"
        heading="Operations and steps encapsulated within the transaction context"
        id="transaction_encapsulated_processes"
      >
        <div className="mt-7 text-base">
          <p className="mt-7">
            After parsing and transaction determination, further critical
            processes take place inside a transaction context, but{" "}
            <span className="font-semibold">why ?</span>
          </p>

          <div className="relative w-full mt-5 overflow-hidden">
            <Image
              src={inside_transaction}
              alt="Client-backend process"
              className="object-cover"
            />
          </div>

          <p className="mt-4">
            <span className="font-semibold">
              {" "}
              <span className="text-xs bg-gray-200 rounded-md font-normal px-1">
                (1)
              </span>{" "}
              Semantic analysis and rewriting.
            </span>{" "}
            This phase actually ensures that the query is not only syntactically
            correct but also{" "}
            <span className="font-semibold">
              semantically valid and optimized{" "}
            </span>{" "}
            for executioin, and once the PostgreSql has completed the semantic
            analysis and query rewriting phase, It proceeds to the
          </p>

          <p className="mt-4">
            <span className="font-semibold">
              {" "}
              <span className="text-xs bg-gray-200 rounded-md font-normal px-1">
                (2)
              </span>{" "}
              Planning and optimization
            </span>{" "}
            stage In this stage, the planner evaluates multiple strategies to
            create <span className="font-semibold">plan tree</span> in the most
            efficient way based on factors like:{" "}
            <span className="underline underline-offset-2 text-sm">
              Cost estimation
            </span>
            ,{" "}
            <span className="underline underline-offset-2 text-sm whitespace-nowrap">
              Index consideration
            </span>
            , and{" "}
            <span className="underline underline-offset-2 text-sm">
              Join strategies.
            </span>
          </p>

          <p className="mt-4">
            Now the{" "}
            <span className="font-semibold">
              <span className="text-xs bg-gray-200 rounded-md font-normal px-1">
                (3)
              </span>{" "}
              executor
            </span>{" "}
            walks in, and start traversing the plan tree, and execute each node
            (scans, joins, filters) as specified.
          </p>

          <p className="mt-4">
            the executor intracts with shared memory structures, such as{" "}
            <span className="px-2 rounded-md bg-gray-200 text-sm">
              shared buffers
            </span>
            , to read pages efficiently, and for write operations, the executor
            changes are recorded in the{" "}
            <span className="px-2 rounded-md bg-gray-200 text-sm">
              WAL buffer{" "}
            </span>
            (Write-Ahead Log) to ensure durability.
          </p>

          <p className="mt-4">
            <span className="px-2 bg-gray-200 rounded-md text-xs">
              Important
            </span>{" "}
            Executing within the transaction context guarantees that all
            operations are{" "}
            <span className="font-semibold whitespace-nowrap">
              {" "}
              atomic and isolated
            </span>
            , adhering to the ACID properties, if an error occurs, the
            transaction can be rolled back, reverting all changes.
          </p>
        </div>
      </ArticleSectionWithHeading>

      <ArticleSectionWithHeading
        className="mt-24 pb-52"
        heading="Executor returning back the control to Transaction Manager"
        id="returning_the_control"
      >
        <div className="mt-7 text-base">
          <p className="mt-7">
            Once the executor has processed the query plan, it returns the
            control to the transaction manager.
          </p>

          <div className="relative w-full mt-5 overflow-hidden">
            <Image
              src={control_back_diagram}
              alt="Client-backend process"
              className="object-cover"
            />
          </div>

          <p className="mt-4">
            In PostgreSql, transaction finalisation depends on wheather the
            transaction is explicit or implit. For{" "}
            <span className="font-semibold">explicit transactions</span>, the
            transaction manager maintains the transaction context until it
            encounters an explicit{" "}
            <span className="px-2 bg-gray-200 rounded-md text-sm">COMMIT</span>{" "}
            or{" "}
            <span className="px-2 bg-gray-200 rounded-md text-sm">
              ROLLBACK
            </span>{" "}
            command from the client.
            <br />
            <br />
            In contrast,{" "}
            <span className="font-semibold">implicit transactions</span> operate
            under PostgreSql&apos;s default autocommit mode, so upon successful
            execution, the transaction manager automatically commits the
            changes.
          </p>

          <p className="mt-4">
            before finalising the commit, PostgreSql writes the
            transaction&apos;s changes to the WAL (Write-Ahead Log), and
            releases all the acquired locks. This helps durability, so even in
            any crash happens, the changes can be recovered.
          </p>

          <p className="mt-4">
            And finally here it returns a success acknowledgment to the client,
            and the transaction manager terminates the transaction context,
            freeing allocated resources.
          </p>
        </div>
      </ArticleSectionWithHeading>
    </ArticleWrapper>
  );
}

export default Article;
