export default function Info() {
  return (
    <section class="max-w-4xl px-4 py-8 mx-auto space-y-4">
      <h1 class="font-semibold text-2xl" itemprop="headline">What is Big O Notation?</h1>

      <meta itemprop="datePublished" content="2024-02-04" />
      <meta itemprop="dateModified" content="2024-02-04" />
      <meta itemprop="author" content="Adeir do Bom Fim junior" />
      <meta itemprop="publisher" content="Your Website" />
      <meta itemprop="url" content="https://example.com/big-o-notation" />
      <meta itemprop="image" content="https://example.com/big-o.jpg" />

      <p itemprop="description">
        Big O notation is a mathematical concept used in computer science to
        describe the efficiency of an algorithm in terms of time complexity and
        space complexity. It helps classify algorithms based on how their
        runtime or space requirements grow as input size increases.
      </p>

      <h2 class="font-semibold text-xl">Why is Big O Notation Important?</h2>

      <p>Understanding Big O notation helps developers:</p>

      <ul>
        <li itemprop="keywords">
          Compare the efficiency of different algorithms.
        </li>
        <li itemprop="keywords">
          Choose the most efficient algorithms for a problem.
        </li>
        <li itemprop="keywords">Optimize code performance.</li>
        <li itemprop="keywords">Predict how code behaves with large inputs.</li>
      </ul>

      <h2 class="font-semibold text-xl">Common Big O Notations</h2>

      <h3 itemprop="about" class="font-semibold">O(1) - Constant Time Complexity</h3>
      <p>
        An algorithm runs in constant time if its execution time does not change
        with the input size. This means the operation takes the same amount of
        time regardless of how large the input is.
      </p>

      <h3 itemprop="about" class="font-semibold">O(log n) - Logarithmic Time Complexity</h3>
      <p>
        Logarithmic complexity occurs in divide-and-conquer algorithms, where
        the input size is reduced exponentially with each operation. This is
        common in search algorithms that eliminate large portions of data at
        each step.
      </p>

      <h3 itemprop="about" class="font-semibold">O(n) - Linear Time Complexity</h3>
      <p>
        Linear complexity means that the execution time increases proportionally
        with input size. This is common in algorithms that iterate through each
        element in a dataset.
      </p>

      <h3 itemprop="about" class="font-semibold">O(n log n) - Linearithmic Time Complexity</h3>

      <p>
        This complexity is often found in efficient sorting algorithms. The
        execution time grows slightly faster than linear time but significantly
        slower than quadratic time.
      </p>

      <h3 itemprop="about" class="font-semibold">O(n²) - Quadratic Time Complexity</h3>

      <p>
        Quadratic complexity occurs when an algorithm contains nested iterations
        over the input data. As the input grows, the time taken increases
        exponentially, making it inefficient for large datasets.
      </p>

      <h3 itemprop="about" class="font-semibold">O(2^n) - Exponential Time Complexity</h3>

      <p>
        Exponential complexity appears in problems where the number of
        operations doubles with each increase in input size. These algorithms
        become impractical quickly as the input size grows.
      </p>

      <h3 itemprop="about" class="font-semibold">O(n!) - Factorial Time Complexity</h3>

      <p>
        Factorial complexity is seen in problems involving permutations or
        combinations. It grows at an extremely rapid rate, making it infeasible
        for large input sizes.
      </p>
    </section>
  );
}
