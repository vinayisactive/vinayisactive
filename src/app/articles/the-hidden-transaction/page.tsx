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
            Even if your query isn’t a transaction, it is a transaction, bahaha.
          </span>
          Hey, I’m Vinay, and recently i was reading about how PostgreSql handles queries internally, and was genuinely curious to understand.
          <br />
          <br />
          I use PostgreSql all the time in my projects anyway, so it just made sense to deep dive in internal working of Postgresql. While going through it, i found a behavior most people don&apos;t even realise exists, and figured i should write about it.
        </p>
      </ArticleDescription>

      <ArticleSectionWithHeading
        className="mt-20"
        heading="Wide view of article"
      >
        <div className="mt-5 text-base flex flex-col justify-start items-start gap-3 md:gap-1">
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

          <Link
            href="#summary"
            className="hover:underline underline-offset-2"
          >
            ㆍSummary
          </Link>
        </div>
      </ArticleSectionWithHeading>

      <ArticleSectionWithHeading
        className="mt-20"
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
            <span className="font-semibold mx-1">
              &quot;backend process&quot;
            </span>
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
            <span className="font-semibold mx-1">RAW PARSER</span> (built with FLEX
            and BISON) to check SQL syntax and produce the initial
            <span className="font-semibold mx-1">&quot;Parse Tree&quot;</span>
          </p>

          <p className="mt-4">
            Note: FLEX and BISON transform
            <span className="px-2 bg-gray-200 rounded-sm mx-1">scan.l</span> and
            <span className="px-2 bg-gray-200 rounded-sm mx-1">gram.y</span> files to
            C file, these auto-generated C files implement the lexar grammer.
          </p>

          <p className="mt-11">
            By inspecting the first node of the <span className="font-semibold"> Parse tree </span>,  PostgreSQL figures out whether the query should be treated as an <span className="underline underline-offset-2"> Implicit</span> or <span className="underline underline-offset-2"> Explicit </span>transaction.
          </p>

          <div className="mt-6 space-y-6">
            <div className="space-y-3">
              <div>
                ㆍ <span className="font-semibold">Implicit transaction</span> =
                 standalone queries like SELECT
              </div>
         
              <div className="text-sm mt-2 pl-1">
                <span className="px-2 rounded-md mr-1 -ml-1 bg-gray-200">Important</span>
                  Even standalone query like SELECT * FROM users; is wrapped inside an implicit transaction to guarantee ACID compliance, even if the user doesn&apos;t explicitly say BEGIN and COMMIT
                </div>
            </div>

            <div>
              ㆍ <span className="font-semibold">Explicit transaction</span> =
              multiple queries wrapped within BEGIN/COMMIT explicitly
            </div>
          </div>

          <p className="mt-11">
            The transaction is handled in two primary ways only,{" "}
              <span className=" mx-1 px-2 bg-gray-200 rounded-md">
                Autocommit
              </span>
            and <span className="px-2 bg-gray-200 rounded-md mx-1">Explicit</span> transaction.
            PostgreSql by default operates in autocommit mode, meaing{" "}
            <span className="underline underline-offset-2">
              each individual statement is treated as a seprate transaction.
            </span>
          </p>

          <p className="mt-4">
            After transaction determination, the PostgreSql calls{" "}
            <span className="px-2 bg-gray-200 rounded-sm">
              StartTransactionCommand
            </span>{" "}
            function to initiate an active{" "}
            <span className="px-2 bg-gray-200 rounded-sm">
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
            processes take place inside a transaction context, {" "}
            <span className="font-semibold">but but but... what even is a transaction context?</span>
          </p>

          <p className="mt-4">
           So, basically  <span className="mx-1 underline underline-offset-2"> transaction context is an active  environment</span>where PostgreSQL keeps track of locks, changes, and snapshots for a query, making sure everything can either be safely committed or completely rolled back incase something goes wrong
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
              Semantic analysis and rewriting: 
            </span>{" "}
            This phase actually ensures that the query is not only syntactically
            correct but also{" "}
            <span className="underline underline-offset-2">
              semantically valid and optimized{" "}
            </span>{" "}
            for executioin, and once the PostgreSql has completed the semantic
            analysis and query rewriting phase, ...It proceeds to the
          </p>

          <p className="mt-4">
            <span className="font-semibold">
              {" "}
              <span className="text-xs bg-gray-200 rounded-md font-normal px-1">
                (2)
              </span>{" "}
              Planning and optimization :
            </span>{" "}
             In this stage, the planner evaluates multiple strategies to
          <span className="underline underline-offset-2 whitespace-nowrap mx-1">create plan tree</span> in the most
            efficient way based on factors like: Cost estimation, Index consideration, and Join strategies ...now the
          </p>

          <p className="mt-4">
            <span className="font-semibold">
              <span className="text-xs bg-gray-200 rounded-md font-normal px-1">
                (3)
              </span>{" "}
              Executor
            </span>
            walks in, and start <span className="underline underline-offset-2 mx-1">traversing the plan tree, and execute each node</span> 
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
        className="mt-24"
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


      
      <ArticleSectionWithHeading
        className="mt-24 pb-52"
        heading="Summary!"
        id="summary"
      >
        <div className="mt-7 text-base">
            <p className="mt-6">
              <span className="font-semibold">&quot;Even if your query isn&apos;t a transaction, it is a transation&quot;</span> 
              {" "} ,So we saw this behavior of PostgreSQL happening above, where every query, whether a simple <span  className="font-semibold mx-1">SELECT</span> or a multiple queries wrapped inside <span className="mx-1 font-semibold">BEGIN/COMMIT</span> runs inside a transation context to ensure ACID applies.
            </p>

            <p className="mt-6">
              We also saw postgreSQL automatically wrapping standalone queries into implicit transactions and treating BEGIN/COMMIT blocks as explicit transactions, it tracks changes, locks, and snapshots during execution so that everything can be either safely committed or fully rolled back. This hidden transactional layer is what keeps your database consistent and reliable without you even realising it.
            </p>

        </div>
      </ArticleSectionWithHeading>
    </ArticleWrapper>
  );
}

export default Article;
